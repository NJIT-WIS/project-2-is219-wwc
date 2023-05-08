// Import required libraries and modules
import React from 'react';
import Head from 'next/head';
import Link from "next/link";
import styles from '/components/AboutPage.module.css';

// Create the AboutPage component
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | MyWebClass.org</title>
        <meta name="description" content="Learn more about MyWebClass.org and our mission to revolutionize education for the AI-driven world." />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>Welcome to MyWebClass.org - Pioneering the Future of Education
      </h1>
        <section className={styles.section}>
        <p>
        Dear friends, colleagues, and fellow educators, we invite you to join us on an essential journey – the transformation of education for the AI-driven world. As we navigate the challenges and opportunities of the Fourth Industrial Revolution, it is crucial to reimagine our educational practices and adopt a new paradigm that empowers our students with the knowledge and skills they need to flourish in an increasingly complex and interconnected world.
        </p>
        
        <p>
        The existing factory school model, a legacy of the Industrial Revolution, is no longer adequate for preparing students for the demands and opportunities presented by AI and other emerging technologies. According to the World Economic Forum, 65% of children entering primary school today will work in jobs that don't exist yet. We must shift our focus towards nurturing creativity, adaptability, and collaboration – essential skills for success in the AI-driven world.
        </p>
        
        <p>
        We have a diverse team of professionals with expertise in various fields, including web development, design, and marketing.
        </p>
       
        <p>
        MyWebClass.org, a foundation committed to revolutionizing education by incorporating Agile and Lean principles into the classroom, is at the forefront of this transformation. Our mission encompasses conducting research on effective strategies, developing resources and tools, offering professional development opportunities, and collaborating with schools and educators to foster a culture of continuous improvement, collaboration, and adaptability.
        </p>
        
        <p>
        A study by the American Institutes for Research (2012) found that schools adopting project-based learning approaches saw significant gains in student achievement. 
        </p>
        
        <p>
        Similarly, a case study published in the Journal of Applied Instructional Design (2015) demonstrated that the integration of Agile principles in a K-12 setting led to increased student engagement, improved collaboration, and enhanced problem-solving skills. These examples attest to the power of incorporating Agile and Lean principles into educational approaches. 
        </p>
        
        <p>
        MyWebClass.org, a foundation committed to revolutionizing education by incorporating Agile and Lean principles into the classroom, is at the forefront of this transformation. Our mission encompasses conducting research on effective strategies, developing resources and tools, offering professional development opportunities, and collaborating with schools and educators to foster a culture of continuous improvement, collaboration, and adaptability.
        </p>

        <p>
        To fully grasp the need for this paradigm shift, it is vital to examine the historical and cultural context that has shaped our current educational system. As societal expectations change and the skills required for success evolve, we must embrace a new educational paradigm.
        </p>

        <p>
        In conclusion, embracing change in education and transcending the factory school model is essential for preparing students for the challenges and opportunities of the AI-driven world. Organizations like MyWebClass.org play a crucial role in driving this paradigm shift by incorporating Agile and Lean principles into the classroom. By working together, we can create an environment where students are better prepared for the future.   
        </p>
        </section>
        
        <section className={styles.section}>
          <h3>References</h3>
            <ul>
                <li>
                 American Institutes for Research (2012). Study of Deeper Learning: Opportunities and Outcomes. Retrieved from <a href="https://www.air.org/resource/study-deeper-learning-opportunities-and-outcomes-2012" target="_blank" rel="noopener noreferrer">https://www.air.org/resource/study-deeper-learning-opportunities-and-outcomes-2012</a>
                </li>
                <li>
                Young, M. R., & Rasor, S. L. (2015). Implementing Agile Methods in K-12 Education. Journal of Applied Instructional Design, 5(1). Retrieved from <a href="https://edtechbooks.org/jaid_5_1/implementing_agile_methods_in_k_12_education" target="_blank" rel="noopener noreferrer">https://edtechbooks.org/jaid_5_1/implementing_agile_methods_in_k_12_education</a>
                </li>
            </ul>
        </section>
      </main>
    </>
  );
};

// Export the AboutPage component
export default AboutPage;
