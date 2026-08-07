const fs = require('fs');
const p = 'src/data/blogPosts.ts';
let c = fs.readFileSync(p, 'utf8');

const targetText = '"text": "Finland has, indisputably, the best education system in the world and here are the top reasons why they do:"\n      },';

const additionalContent = `
      {
        "type": "paragraph",
        "text": "1. Customised trips: Finland is no one-size-fits-all destination. We curate itineraries tailored to specific needs. Whether it is early childhood education, vocational training or higher education, Finland has a rich history of pedagogical innovations and we align those to the interests of the delegations."
      },
      {
        "type": "paragraph",
        "text": "2. Immersive Site Visits: We don't just visit schools; we experience them. Our delegation interacted with the staff of various schools across the country getting an authentic feel of the Finnish education system. We observed classes in session, explored learning spaces, and engaged in insightful discussions with educators."
      },
      {
        "type": "paragraph",
        "text": "3. Interaction with Finnish Education Stakeholders: We had the privilege to meet with researchers, policymakers, and administrators in the education sector. They shared their insights on the unique features of the Finnish system, such as trust-based accountability, collaborative learning, and student well-being."
      },
      {
        "type": "paragraph",
        "text": "4. Cultural immersion & pedagogical exploration: Beyond schools, we experienced Finland's rich cultural heritage. We visited museums, explored the city and witnessed the integration of arts and nature in education. These experiences highlighted the holistic approach that Finland takes in nurturing well-rounded individuals."
      },
      {
        "type": "image",
        "src": "/blog-images/finlandeducation_inline_2_bf78a9_40a82d05499d4f38bdbc64e696e80dd0_mv2.jpg",
        "caption": ""
      },`;

if (c.includes(targetText)) {
  fs.writeFileSync(p, c.replace(targetText, targetText + additionalContent));
  console.log('Success');
} else {
  console.log('Not found');
}
