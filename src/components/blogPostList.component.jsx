import React, { useEffect, useState } from 'react';
import './blogPostList.scss';
import BlogPost from './blogpost/blogPost.component';
import Citation from './citation/citation.component';


const BlogPostList = () => {
  let [blogPost, setBlogPost] = useState([]);
  let [isExploreMode, setExploreMode] = useState(true);


  useEffect(() => {
    blogPost = [
      {
        "id": 1,
        "isParent": true,
        "date": "April 11, 2023",
        "title": "Amul",
        "content": `<p>Anand Milk Union Limited (abbreviated as Amul) is an Indian state government-owned dairy-based cooperative society officially named the \n
        Gujarat Milk Marketing Federation based in <a href='data1' id="data1">Anand, Gujarat</a>.It is under the ownership of Gujarat Cooperative Milk Marketing Federation Limited, \n
        Department of Cooperation, Government of Gujarat. It is controlled by 3.6 million milk producers within the city. 
        <a href='data'>Tribhuvandas Kishibhai Patel</a> founded the organisation in 1946 and served as its chairman until his retirement in the 1970s. 
        He hired Verghese Kurien in 1949,initially as the general manager, where Kurien guided the technical and marketing efforts of the cooperative. 
        Kurien briefly became the chairman of Amul following Patel's death in 1994, and is credited with the success of Amul's marketing.
        Amul spurred <a href='data2'>India's White Revolution</a>, which made the country the world's largest producer of milk and milk products, 
        and has since ventured into overseas markets. <br>
        <strong>History</strong><br>
        Verghese Kurien, Tribhuvandas Kishibhai Patel, 
        and Harichand Megha Dalaya Charles, Prince of Wales, visits India and Amul with Harichand Megha Dalaya, 
        in December 1980 Prime Minister Narendra Modi at Amul's chocolate plant at
        Anand in September 2018 Amul was found on 19 December 1946 as a response 
        to the exploitation of small dairy farmers by traders and agents. 
        At the time, milk prices were arbitrarily determined, giving Polson an effective monopoly
        in milk collection from Kaira and its subsequent supply to Mumbai.Frustrated with 
        the trade practices (which they perceived as unfair), the farmers of Kaira, 
        led by Tribhuvandas Patel, approached Sardar Vallabhbhai Patel, who 
        advised them to form a cooperative. If they did so, they would be able to 
        directly supply their milk to the Bombay Milk Scheme instead of working for Polson.
        Sardar Patel sent Morarji Desai to organise the farmers.
        </p>`,
        "child_posts": [
          {
            "id": "data1",
            "isParent": false,
            "title": "Exploring Tokyo",
            "content": `<p>By June 1948, the KDCMPUL had started pasteurising milk for the Bombay Milk Scheme.\n            Then-Prime Minister Lal Bahadur Shastri visited Anand to inaugurate Amul's cattle feed factory. \n            On 31 October 1964, he spoke to farmers about their cooperative.\n             After returning to Delhi, he set in motion the creation of an organisation, the National Dairy Development Board (NDDB),\n              to replicate the Kaira cooperative in other parts of India.<br>\n               Under the leadership of Tribhuvandas Patel, in 1973, Amul celebrated its 25th \n               anniversary with <a href=\"\" >Morarji Desai</a>, Maniben Patel, and Verghese Kurien. \n               The cooperative was further developed through the efforts of Verghese Kurien \n               and H. M. Dalaya. Dalayas innovation of making skim milk powder from \n               buffalo milk was a technological breakthrough that revolutionised India's organised dairy industry.<br>\n                With Kurien's help, the process was expanded on a commercial scale, which led to the first modern dairy cooperative at Anand. \n                This cooperative would go on to compete against the established players in the market.[16] The success of the trio (T. K. Patel, Kurien, and Dalaya) at the cooperative's dairy soon spread to Anand's neighborhood in Gujarat.\n                 Within a short span, five unions in other districts  Mehsana, Banaskantha, Baroda, Sabarkantha, and Surat  were set up, following the approach sometimes described as the Anand pattern.[11] In 1970, the cooperative spearheaded the White Revolution of India. To combine forces and expand the market while saving on advertising and avoiding competing against each other, \n                 the Gujarat Co-operative Milk Marketing Federation Ltd., an apex marketing body of these district cooperatives, was set up in 1973.\n                  The Kaira Union, which had the brand name Amul with it since 1955, transferred it to GCMMF.[17] Technological developments at Amul have subsequently spread to other parts of India.[citation needed] In 1999,\n                   it was awarded the Best of All Rajiv Gandhi National Quality Award.[18] The GCMMF is the largest food product marketing organisation in India. \n                   As the apex organisation of the dairy cooperatives of Gujarat, it is the exclusive marketing organisation for products under the brand name Amul and Sagar.\n                    For more than five decades, dairy cooperatives in Gujarat have created an economic network that links more than 3.1 million village\n                     milk products with crores of consumers in India. In 2007, Gujarat Cooperative Milk Marketing Federation Ltd crossed US$1 billion \n                     in its sales turnover and entered the elite club of food companies having this distinction from India.[19] In one more major achievement, \n                     the dairy cooperatives of Gujarat under the GCMMF fold crossed the mark of milk procurement of 10 million kilograms per day on 27 December 2007, which is the highest ever milk procurement achieved by any dairy network in India, be it private or cooperative. \n                     The entire quantity of milk received was accepted without any milk holidays and was processed successfully into milk and other milk products.[19]\n                      In 2018, Amul inaugurated a new chocolate plant in Mogar, Anand, near their headquarters, with Prime Minister Narendra Modi in attendance. \n                      The new plant has been built with an increased capacity of 1,000 tonnes per month against the earlier 250 tonnes per month capacity. \n                      GCMMF has invested around ₹3 billion in this project. \n              It is a fully automated production factory with minimal human intervention.</p>`,
            "img": " "
          },
          {
            "id": "data",
            "isParent": false,
            "title": "Visiting Kyoto",
            "content": `<p>By June 1948, the KDCMPUL had started pasteurising milk for the Bombay Milk Scheme.\n            Then-Prime Minister Lal Bahadur Shastri visited Anand to inaugurate Amul's cattle feed factory. \n            On 31 October 1964, he spoke to farmers about their cooperative.\n             After returning to Delhi, he set in motion the creation of an organisation, the National Dairy Development Board (NDDB),\n              to replicate the Kaira cooperative in other parts of India.<br>\n               Under the leadership of Tribhuvandas Patel, in 1973, Amul celebrated its 25th \n               anniversary with <a href=\"\" >Morarji Desai</a>, Maniben Patel, and Verghese Kurien. \n               The cooperative was further developed through the efforts of Verghese Kurien \n               and H. M. Dalaya. Dalayas innovation of making skim milk powder from \n               buffalo milk was a technological breakthrough that revolutionised India's organised dairy industry.<br>\n                With Kurien's help, the process was expanded on a commercial scale, which led to the first modern dairy cooperative at Anand. \n                This cooperative would go on to compete against the established players in the market.[16] The success of the trio (T. K. Patel, Kurien, and Dalaya) at the cooperative's dairy soon spread to Anand's neighborhood in Gujarat.\n                 Within a short span, five unions in other districts  Mehsana, Banaskantha, Baroda, Sabarkantha, and Surat  were set up, following the approach sometimes described as the Anand pattern.[11] In 1970, the cooperative spearheaded the White Revolution of India. To combine forces and expand the market while saving on advertising and avoiding competing against each other, \n                 the Gujarat Co-operative Milk Marketing Federation Ltd., an apex marketing body of these district cooperatives, was set up in 1973.\n                  The Kaira Union, which had the brand name Amul with it since 1955, transferred it to GCMMF.[17] Technological developments at Amul have subsequently spread to other parts of India.[citation needed] In 1999,\n                   it was awarded the Best of All Rajiv Gandhi National Quality Award.[18] The GCMMF is the largest food product marketing organisation in India. \n                   As the apex organisation of the dairy cooperatives of Gujarat, it is the exclusive marketing organisation for products under the brand name Amul and Sagar.\n                    For more than five decades, dairy cooperatives in Gujarat have created an economic network that links more than 3.1 million village\n                     milk products with crores of consumers in India. In 2007, Gujarat Cooperative Milk Marketing Federation Ltd crossed US$1 billion \n                     in its sales turnover and entered the elite club of food companies having this distinction from India.[19] In one more major achievement, \n                     the dairy cooperatives of Gujarat under the GCMMF fold crossed the mark of milk procurement of 10 million kilograms per day on 27 December 2007, which is the highest ever milk procurement achieved by any dairy network in India, be it private or cooperative. \n                     The entire quantity of milk received was accepted without any milk holidays and was processed successfully into milk and other milk products.[19]\n                      In 2018, Amul inaugurated a new chocolate plant in Mogar, Anand, near their headquarters, with Prime Minister Narendra Modi in attendance. \n                      The new plant has been built with an increased capacity of 1,000 tonnes per month against the earlier 250 tonnes per month capacity. \n                      GCMMF has invested around ₹3 billion in this project. \n              It is a fully automated production factory with minimal human intervention.</p>`,
            "img": ""
          },
          {
            "title": "Trying Japanese cuisine",
            "id": "data2",
            "isParent": false,
            "content": `<p>By June 1948, the KDCMPUL had started pasteurising milk for the Bombay Milk Scheme.\n            Then-Prime Minister Lal Bahadur Shastri visited Anand to inaugurate Amul's cattle feed factory. \n       It is a fully automated production factory with minimal human intervention.</p>`,
            "img": ""
          }
        ],
        "citation": [
          {
            "description": "Huynen J, McCall R and Griffin M. Towards design recommendations for training of security critical agents in mixed reality environments. Proceedings of the 32nd International BCS Human Computer Interaction Conference. (1-5).",
            "link": "https://doi.org/10.14236/ewic/HCI2018.84"
          },
          {
            "description": "  K, Peever N, Klarkowski M, Ploderer B, Mitchell J and Johnson D. Using Applied Games to Engage mHealth Users. Proceedings of the 2018 Annual Symposium on Computer-Human Interaction in Play. (511-522).",
            "link": "https://doi.org/10.1145/3242671.3242686"
          },
          {
            "description": "Cheng K, Lin V, Nijhawan K, Westhem A and Bernstein M. Apps with Benefits. Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems. (2452-2458)",
            "link": "https://doi.org/10.1145/3027063.3053276"
          }
        ],
        "reference": [
          { "description": "Alessi, S. M. (1991). Fidelity in the design of instructional simulations. Journal of Computer-Based Instruction, 15, 40-47." },
          { "description": "Balci, O. (1998, December 13-16). Verification, validation, and accreditation . Paper presented at the Winter Simulation Conference. Washington, DC." },
          { "description": "Balci, O., Henrikson, J. O., & Roberts, S. D. (1986, December 8-10). Credibility assessment of simulation results. In J. R. Wilson, J. O. Henriksen, & S. D. Roberts (Eds.), 1986 Winter Simulation Conference Proceedings. Washington, DC." }
        ]
      },
      {
        "id": 2,
        "title": "My second Blog Post",
        "date": "April 11, 2023",
        "isParent": true,
        "content": "Welcome to my blog! This is my first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae est sapien. Phasellus dignissim, ipsum in <a href='data3'>bibendum</a> varius, ipsum nulla maximus erat, ac dapibus turpis velit in est. Sed molestie lectus et dolor lobortis euismod. Nullam vel nibh nec purus cursus efficitur. Donec convallis diam ac diam consectetur bibendum. Duis auctor, nunc at convallis aliquam, tellus dolor placerat nunc, vel maximus est lorem non dolor. Sed a dolor nec tortor facilisis iaculis at vel lectus. Sed vel lectus massa. Donec vitae eleifend sapien. Etiam in purus augue. Nullam convallis malesuada dolor quis gravida. Suspendisse potenti. Proin rutrum erat non justo facilisis, a vulputate enim dictum. Thank you for reading! ",
        "child_posts": [
          {
            "id": "data3",
            "isParent": false,
            "title": "Exploring Anime",
            "content": "<P>Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.Anand is the administrative centre of Anand District in the state of Gujarat, India. It is administered by Anand Municipality. It is part of the region known as Charotar, consisting of Anand and Kheda districts.</P>",
            "img": ""
          }
        ],
        "citation": [
          {
            "description": "Huynen J, McCall R and Griffin M. Towards design recommendations for training of security critical agents in mixed reality environments. Proceedings of the 32nd International BCS Human Computer Interaction Conference. (1-5).",
            "link": "https://doi.org/10.14236/ewic/HCI2018.84"
          }
        ],
        "reference": [
          { "description": "Alessi, S. M. (1991). Fidelity in the design of instructional simulations. Journal of Computer-Based Instruction, 15, 40-47." },
        ]
      }
    ]
    setBlogPost(blogPost);
  }, [])

  const navigateToChildPost = (event) => {
    console.log('clickeddd', event);
    const url = `${window.location.origin}/post/${event?.id}?state=${encodeURIComponent(JSON.stringify(event))}`;
    window.open(url, '_blank');
  }


  return (
    <>
      <div className="list-title">Wikipedia Article: Amul</div>
      <button onClick={() => setExploreMode(!isExploreMode)}>Explore</button>
      {blogPost.map((post) => {
        return (
          <div className={isExploreMode ? 'blog-list-block' : 'blog-list-wrapper'}>
            <div className="list-item citation-list">
              <div className={isExploreMode ? 'display-none' : ''}>
                <Citation citation={post.citation} reference={post.reference}></Citation>
              </div>
            </div>
            <div className="list-item post-list">
              <BlogPost key={post.id} post={post} isExploreMode={isExploreMode} onChildEvent={navigateToChildPost} />
            </div>
            <div className="list-item">
              <div className={isExploreMode ? 'display-none' : ''}>
                <h4>comments</h4>
              </div>
            </div>
          </div>
        )

      })}
    </>
  );
};

export default BlogPostList;
