import { expect, test } from "@playwright/test";

test("root page renders, load employee and show them", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Find your Oompa Loompa")).toBeVisible();
  await expect(page.getByText("There are more than 100k")).toBeVisible();

  await expect(page.getByText("Loading...")).toBeVisible();
  await expect(page.getByText("No employees found")).toBeVisible();

  await page.waitForLoadState("networkidle");

  await expect(page.getByText(/Marcy Karadzas/i)).toBeVisible();
  await expect(page.getByText(/Evangelia Cowin/i)).toBeVisible();
  await expect(page.getByText(/Nesta Pidgley/i)).toBeVisible();
});

test("search for employee", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("Search").fill("Marcy");

  await expect(page.getByText(/Marcy Karadzas/i)).toBeVisible();
  await expect(page.getByText(/Evangelia Cowin/i)).toBeHidden();
  await expect(page.getByText(/Nesta Pidgley/i)).toBeHidden();
});

test("scroll to bottom and load more employees", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await expect(page.getByText("Loading...")).toBeVisible();
  await page.waitForLoadState("networkidle");

  await expect(page.getByText(/Marcy Karadzas/i)).toBeVisible();
  await expect(page.getByText(/Evangelia Cowin/i)).toBeVisible();
  await expect(page.getByText(/Nesta Pidgley/i)).toBeVisible();
});

test("click on employee and go to detail page", async ({ page }) => {
  await page.goto("/");

  await page.getByText(/Marcy Karadzas/i).click();
  expect(page.url()).toContain("/employees/1");

  await page.waitForLoadState("networkidle");

  await expect(page.getByText("Marcy Karadzas")).toBeVisible();
  await expect(page.getByText("Woman")).toBeVisible();
  await expect(page.getByText("Marcy Karadzas")).toBeVisible();

  const image = page.getByAltText("Marcy profile photo");
  await expect(image).toBeVisible();
});

test("click on employee and go to detail page, click on logo and go to root page", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByText(/Marcy Karadzas/i).click();
  expect(page.url()).toContain("/employees/1");

  await page.waitForLoadState("networkidle");

  await expect(page.getByText("Marcy Karadzas")).toBeVisible();
  await expect(page.getByText("Woman")).toBeVisible();
  await expect(page.getByText("Marcy Karadzas")).toBeVisible();

  const image = page.getByAltText("Marcy profile photo");
  await expect(image).toBeVisible();

  await page.getByAltText("logo").click();

  await expect(page.getByText("Find your Oompa Loompa")).toBeVisible();
  await expect(page.getByText("There are more than 100k")).toBeVisible();

  await page.waitForLoadState("networkidle");

  await expect(page.getByText(/Marcy Karadzas/i)).toBeVisible();
  await expect(page.getByText(/Evangelia Cowin/i)).toBeVisible();
  await expect(page.getByText(/Nesta Pidgley/i)).toBeVisible();
});
