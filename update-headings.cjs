const fs = require('fs');
const p = 'src/data/blogPosts.ts';
let c = fs.readFileSync(p, 'utf8');

const old1 = `"text": "1. Customised trips: Finland is no one-size-fits-all destination. We curate itineraries tailored to specific needs. Whether it is early childhood education, vocational training or higher education, Finland has a rich history of pedagogical innovations and we align those to the interests of the delegations."`;
const new1 = `"text": "1. Customised trips"\n      },\n      {\n        "type": "paragraph",\n        "text": "Finland is no one-size-fits-all destination. We curate itineraries tailored to specific needs. Whether it is early childhood education, vocational training or higher education, Finland has a rich history of pedagogical innovations and we align those to the interests of the delegations."`;

const old2 = `"text": "2. Immersive Site Visits: We don't just visit schools; we experience them. Our delegation interacted with the staff of various schools across the country getting an authentic feel of the Finnish education system. We observed classes in session, explored learning spaces, and engaged in insightful discussions with educators."`;
const new2 = `"text": "2. Immersive Site Visits"\n      },\n      {\n        "type": "paragraph",\n        "text": "We don't just visit schools; we experience them. Our delegation interacted with the staff of various schools across the country getting an authentic feel of the Finnish education system. We observed classes in session, explored learning spaces, and engaged in insightful discussions with educators."`;

const old3 = `"text": "3. Interaction with Finnish Education Stakeholders: We had the privilege to meet with researchers, policymakers, and administrators in the education sector. They shared their insights on the unique features of the Finnish system, such as trust-based accountability, collaborative learning, and student well-being."`;
const new3 = `"text": "3. Interaction with Finnish Education Stakeholders"\n      },\n      {\n        "type": "paragraph",\n        "text": "We had the privilege to meet with researchers, policymakers, and administrators in the education sector. They shared their insights on the unique features of the Finnish system, such as trust-based accountability, collaborative learning, and student well-being."`;

const old4 = `"text": "4. Cultural immersion & pedagogical exploration: Beyond schools, we experienced Finland's rich cultural heritage. We visited museums, explored the city and witnessed the integration of arts and nature in education. These experiences highlighted the holistic approach that Finland takes in nurturing well-rounded individuals."`;
const new4 = `"text": "4. Cultural immersion & pedagogical exploration"\n      },\n      {\n        "type": "paragraph",\n        "text": "Beyond schools, we experienced Finland's rich cultural heritage. We visited museums, explored the city and witnessed the integration of arts and nature in education. These experiences highlighted the holistic approach that Finland takes in nurturing well-rounded individuals."`;

c = c.replace(old1, new1).replace(old2, new2).replace(old3, new3).replace(old4, new4);

// Also need to change "type": "paragraph" to "type": "heading" for the headings.
// But since I only replaced the text string, the type above it is still "paragraph".
// Let's just do a regex replace to fix the type for these specific headings.
c = c.replace(/"type": "paragraph",\n\s+"text": "1\. Customised trips"/, '"type": "heading",\n        "text": "1. Customised trips"');
c = c.replace(/"type": "paragraph",\n\s+"text": "2\. Immersive Site Visits"/, '"type": "heading",\n        "text": "2. Immersive Site Visits"');
c = c.replace(/"type": "paragraph",\n\s+"text": "3\. Interaction with Finnish Education Stakeholders"/, '"type": "heading",\n        "text": "3. Interaction with Finnish Education Stakeholders"');
c = c.replace(/"type": "paragraph",\n\s+"text": "4\. Cultural immersion & pedagogical exploration"/, '"type": "heading",\n        "text": "4. Cultural immersion & pedagogical exploration"');

fs.writeFileSync(p, c);
console.log("Updated to headings");
