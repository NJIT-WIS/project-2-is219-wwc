const { chromium } = require("playwright");

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

describe("Sales Funnel Tests", async () => {
  test("1. Awareness: Metadata and discovery/interest", async () => {
    // Navigate to the page
    await page.goto("https://project-2-is219-wwc.vercel.app/");

    // Test metadata
    const title = await page.title();
    expect(title).toBe("MyWebClass");

    const description = await page.$eval(
      'meta[name="description"]',
      (el) => el.content
    );
    expect(description).toBe(
      "Unleash the potential of Agile and Lean methodologies in your classroom. Join MyWebClass to explore groundbreaking strategies that revolutionize teaching and empower students for the AI-driven world."
    );

    const ogTitle = await page.$eval(
      'meta[property="og:title"]',
      (el) => el.content
    );
    expect(ogTitle).toBe("Innovate and Transform Education - MyWebClass");

    // Test discovery/interest
    const heroText = await page.textContent(".hero-text-selector");
    expect(heroText).toBeTruthy(); // or more specific assertions based on the expected content

    const heroImage = await page.$(".hero-image");
    expect(heroImage).toBeTruthy();
  });

  test("2. Interest: Blogs", async () => {
    // Navigate to the blog listing page
    await page.goto("https://project-2-is219-wwc.vercel.app/blog");

    // Test blog posts listing (change css selector)
    const blogPosts = await page.$$(".blog-post");
    expect(blogPosts.length).toBeGreaterThan(0);

    // Navigate to the first blog post
    // Get the id of the first post title
    const firstPostTitleId = await blogPosts[0].$('h2').getAttribute('id');

    // Click on the first post title
    await page.click(`#${firstPostTitleId}`);

    // Wait for the navigation to complete
    await page.waitForNavigation();

    // Test blog post content
    const postTitle = await page.textContent(".post-title");
    expect(postTitle).toBeTruthy(); // or more specific assertions based on the expected content

    const postContent = await page.textContent(".post-content");
    expect(postContent).toBeTruthy(); // or more specific assertions based on the expected content
  });

  test("3. Evaluation/Decision: Sales Presentation and Call-to-Action", async () => {
    // Navigate to the sales presentation page
    await page.goto("https://project-2-is219-wwc.vercel.app/Volunteer");

    // Test sales presentation content
    const presentationContent = await page.textContent(
      ".presentation-content-selector"
    );
    expect(presentationContent).toBeTruthy(); // or more specific assertions based on the expected content

    // Test benefits section
    const benefitsSection = await page.$$(".benefit-selector");
    expect(benefitsSection.length).toBeGreaterThan(0);

    // Test call-to-action button
    const ctaButton = await page.$(".cta-button-selector");
    expect(ctaButton).toBeTruthy();
  });

  test("4. Action: MailChimp", async () => {
    // Navigate to the page containing the MailChimp sign-up form
    await page.goto("https://project-2-is219-wwc.vercel.app/Volunteer");

    // Test MailChimp form presence
    const signupForm = await page.$(".signup-form-selector");
    expect(signupForm).toBeTruthy();

    // Test input fields
    const emailInput = await page.$('input[type="email"]');
    expect(emailInput).toBeTruthy();

    // Fill in the form
    await emailInput.type("test@example.com");

    // Test submit button
    const submitButton = await page.$('input[type="submit"]');
    expect(submitButton).toBeTruthy();

    // Submit the form
    await Promise.all([
      page.waitForNavigation(), // Wait for the navigation to complete
      submitButton.click(), // Click the submit button
    ]);

  });

  test("5. Loyalty: Social Media Sharing", async () => {
    // Navigate to the page containing the footer with social media sharing buttons
    await page.goto(
      "https://project-2-is219-wwc.vercel.app/post/Unlocking-Creativity-with-AI"
    );

    // Test presence of social media share buttons in the footer
    const facebookShareButton = await page.$("footer .facebook-button");
    expect(facebookShareButton).toBeTruthy();
    // Add more share buttons as needed

    // Click on the Twitter share button and check if a new window or dialog opens
    page.on("popup", async (popup) => {
      const url = await popup.url();
      expect(url).toContain("https://twitter.com/intent/tweet");
      await popup.close();
    });
    await twitterShareButton.click();

    // Click on the Facebook share button and check if a new window or dialog opens
    page.on("popup", async (popup) => {
      const url = await popup.url();
      expect(url).toContain("https://www.facebook.com/sharer/sharer.php");
      await popup.close();
    });
    await facebookShareButton.click();

    // Add more tests for additional share buttons as needed
  });
});
