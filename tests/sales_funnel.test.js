const { chromium } = require('playwright');

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

describe('Sales Funnel Tests', async () => {
  test('1. Awareness: Metadata and discovery/interest', async () => {
    // Navigate to the page
    await page.goto('https://njit-wis.github.io/project-2-is219-wwc/');

    // Test metadata
    const title = await page.title();
    expect(title).toBe('MyWebClass');
    
    const description = await page.$eval('meta[name="description"]', el => el.content);
    expect(description).toBe('Unleash the potential of Agile and Lean methodologies in your classroom. Join MyWebClass to explore groundbreaking strategies that revolutionize teaching and empower students for the AI-driven world.');

    const ogTitle = await page.$eval('meta[property="og:title"]', el => el.content);
    expect(ogTitle).toBe('Innovate and Transform Education - MyWebClass');

    // Test discovery/interest
    const heroText = await page.textContent('.hero-text-selector');
    expect(heroText).toBeTruthy(); // or more specific assertions based on the expected content

    const heroImage = await page.$('.hero-image-selector');
    expect(heroImage).toBeTruthy();
  });

  test('2. Interest: Blogs', async () => {
    // Navigate to the blog listing page
    await page.goto('https://njit-wis.github.io/project-2-is219-wwc/blog');
  
    // Test blog posts listing (change css selector)
    const blogPosts = await page.$$('.blog-post-selector');
    expect(blogPosts.length).toBeGreaterThan(0);
  
    // Navigate to the first blog post
    const firstPostLink = await blogPosts[0].getAttribute('href');
    await page.goto(firstPostLink);
  
    // Test blog post content
    const postTitle = await page.textContent('.post-title-selector');
    expect(postTitle).toBeTruthy(); // or more specific assertions based on the expected content
  
    const postContent = await page.textContent('.post-content-selector');
    expect(postContent).toBeTruthy(); // or more specific assertions based on the expected content
  
    // Test engagement features (e.g., comments, social sharing buttons)
    const commentSection = await page.$('.comment-section-selector');
    expect(commentSection).toBeTruthy();
  
    const socialSharingButtons = await page.$$('.social-sharing-button-selector');
    expect(socialSharingButtons.length).toBeGreaterThan(0);
  
    // Add more engagement checks as needed
  });
  

  test('3. Evaluation/Decision: Sales Presentation and Call-to-Action', async () => {
    // Navigate to the sales presentation page
    await page.goto('https://njit-wis.github.io/project-2-is219-wwc/volunteer');
  
    // Test sales presentation content
    const presentationContent = await page.textContent('.presentation-content-selector');
    expect(presentationContent).toBeTruthy(); // or more specific assertions based on the expected content
  
    // Test benefits section
    const benefitsSection = await page.$$('.benefit-selector');
    expect(benefitsSection.length).toBeGreaterThan(0);
  
    // Test call-to-action button
    const ctaButton = await page.$('.cta-button-selector');
    expect(ctaButton).toBeTruthy();

  });
  

  test('4. Action: MailChimp', async () => {
    // Navigate to the page containing the MailChimp sign-up form
    await page.goto('https://njit-wis.github.io/project-2-is219-wwc/Volunteer');
  
    // Test MailChimp form presence
    const signupForm = await page.$('.signup-form-selector');
    expect(signupForm).toBeTruthy();
  
    // Test input fields
    const emailInput = await page.$('input[type="email"]');
    expect(emailInput).toBeTruthy();
  
    // Fill in the form
    await emailInput.type('test@example.com');
  
    // Test submit button
    const submitButton = await page.$('input[type="submit"]');
    expect(submitButton).toBeTruthy();
  
    // Submit the form
    await Promise.all([
      page.waitForNavigation(), // Wait for the navigation to complete
      submitButton.click(), // Click the submit button
    ]);
  
    // Check for successful submission (e.g., a success message)
    const successMessage = await page.$('.success-message-selector');
    expect(successMessage).toBeTruthy();
  });
  

  test('5. Loyalty: Social Media Sharing', async () => {
    // Navigate to the page containing the footer with social media sharing buttons
    await page.goto('https://njit-wis.github.io/project-2-is219-wwc/');
  
    // Test presence of social media share buttons in the footer
    const twitterShareButton = await page.$('footer .twitter-share-button-selector');
    expect(twitterShareButton).toBeTruthy();
    const facebookShareButton = await page.$('footer .facebook-share-button-selector');
    expect(facebookShareButton).toBeTruthy();
    // Add more share buttons as needed
  
    // Click on the Twitter share button and check if a new window or dialog opens
    page.on('popup', async (popup) => {
      const url = await popup.url();
      expect(url).toContain('https://twitter.com/intent/tweet');
      await popup.close();
    });
    await twitterShareButton.click();
  
    // Click on the Facebook share button and check if a new window or dialog opens
    page.on('popup', async (popup) => {
      const url = await popup.url();
      expect(url).toContain('https://www.facebook.com/sharer/sharer.php');
      await popup.close();
    });
    await facebookShareButton.click();
  
    // Add more tests for additional share buttons as needed
  });  
});
