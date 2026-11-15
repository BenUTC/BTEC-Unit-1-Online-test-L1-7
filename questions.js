/* ------------------------------------------------------------------
   BTEC Unit 1 (The Online World) - onscreen practice test
   Question bank. Lessons 1 to 7. Total = 50 marks.
   All questions are original, written in the style of the Pearson
   onscreen test. Every question auto-marks.

   Question types:
     single : one correct option (radio).            marks usually 1
     multi  : choose exactly N correct (checkboxes).  1 mark per correct
     match  : pair each left item to a right option.  1 mark per correct pair
   For multi and match, 'marks' equals the number of correct answers.
-------------------------------------------------------------------*/
const QUESTIONS = [

  /* ---------------- Lesson 1: Online services (7) ---------------- */
  { id:'q_os_match', topic:'Online services', type:'match', marks:3,
    stem:'A family use the internet for different things. Match each activity to the type of online service it is.',
    left:['Buying trainers from a website','Watching a film on a streaming site','Taking a course on the school VLE'],
    right:['Commerce','Entertainment','Education'],
    answer:[0,1,2] },

  { id:'q_os_vle', topic:'Online services', type:'single', marks:1,
    stem:'What do the letters VLE stand for?',
    options:['Virtual Learning Environment','Video Learning Experience','Verified Login Entry','Virtual Local Exchange'],
    answer:0 },

  { id:'q_os_netiquette', topic:'Online services', type:'multi', marks:2,
    stem:'Netiquette means behaving well online. Choose TWO examples of good netiquette.',
    options:['Use clear, polite language','TYPE EVERYTHING IN CAPITAL LETTERS','Do not share other people’s personal details','Send the same message over and over'],
    answer:[0,2] },

  { id:'q_os_comm', topic:'Online services', type:'single', marks:1,
    stem:'Which of these is an online communication service?',
    options:['Email','A printer','A spreadsheet','A USB stick'],
    answer:0 },

  /* ---------------- Lesson 2: Online advertising (4) ---------------- */
  { id:'q_ad_ppc', topic:'Online advertising', type:'single', marks:1,
    stem:'A business pays the website only each time its advert is clicked. What is this called?',
    options:['Pay-per-click','Spam','Compression','Encryption'],
    answer:0 },

  { id:'q_ad_match', topic:'Online advertising', type:'match', marks:2,
    stem:'Match each advertising word to what it means.',
    left:['Banner advert','Pop-up advert'],
    right:['A wide advert across the top of a web page','An advert that appears in a new window on top of the page'],
    answer:[0,1] },

  { id:'q_ad_why', topic:'Online advertising', type:'single', marks:1,
    stem:'Give one reason a business might advertise online instead of in a local newspaper.',
    options:['It can reach people all over the world','It cannot be seen on a phone','It always costs more money','It can only be shown once'],
    answer:0 },

  /* ---------------- Lesson 3: Online communication (7) ---------------- */
  { id:'q_cm_match', topic:'Online communication', type:'match', marks:3,
    stem:'Match each method of online communication to its description.',
    left:['VoIP','Wiki','Instant messaging'],
    right:['Making voice or video calls over the internet','A website that many people can edit together','Sending quick text messages in real time'],
    answer:[0,1,2] },

  { id:'q_cm_server', topic:'Online communication', type:'single', marks:1,
    stem:'In a client and server system, what does the server do?',
    options:['Stores web pages and sends them back when asked','Asks for a web page to be sent to it','Prints the web page onto paper','Connects the keyboard to the screen'],
    answer:0 },

  { id:'q_cm_two', topic:'Online communication', type:'multi', marks:2,
    stem:'Choose TWO ways people share updates or videos with others online.',
    options:['Social networking site','Vlog','Compression','File permission'],
    answer:[0,1] },

  { id:'q_cm_realtime', topic:'Online communication', type:'single', marks:1,
    stem:'Which service lets two people speak and see each other live over the internet?',
    options:['VoIP','FTP','A wiki','A blog'],
    answer:0 },

  /* ---------------- Lesson 4: Online documents (7) ---------------- */
  { id:'q_dc_comp', topic:'Online documents', type:'single', marks:1,
    stem:'What does compressing a file do?',
    options:['Makes the file smaller','Changes the file to a video','Deletes the file','Prints the file'],
    answer:0 },

  { id:'q_dc_zip', topic:'Online documents', type:'single', marks:1,
    stem:'Which file type is a compressed (zipped) file?',
    options:['.zip','.docx','.mp4','.html'],
    answer:0 },

  { id:'q_dc_version', topic:'Online documents', type:'single', marks:1,
    stem:'What is version control?',
    options:['A history of changes so you can go back to an earlier version','A way to make the text bigger','A type of online advert','A rule for sending web pages'],
    answer:0 },

  { id:'q_dc_perm', topic:'Online documents', type:'match', marks:2,
    stem:'Match each file permission to what it lets a user do.',
    left:['Read-only','Read and write'],
    right:['View the file but not change it','View the file and change it'],
    answer:[0,1] },

  { id:'q_dc_benefit', topic:'Online documents', type:'multi', marks:2,
    stem:'Choose TWO benefits of using online office software such as Google Docs.',
    options:['Several people can work on the same document at once','The work is backed up automatically','It works with no internet connection','It stops every computer virus'],
    answer:[0,1] },

  /* ---------------- Lesson 5: Cloud and ubiquitous (5) ---------------- */
  { id:'q_cl_cloud', topic:'Cloud and ubiquitous', type:'single', marks:1,
    stem:'What does cloud computing mean?',
    options:['Storing files and software on the internet','Storing files only on a USB stick','Printing files to paper','Deleting old files'],
    answer:0 },

  { id:'q_cl_ubiq', topic:'Cloud and ubiquitous', type:'single', marks:1,
    stem:'What does ubiquitous computing mean?',
    options:['Computers are all around us in everyday objects','Computers are only found in offices','There is only one computer in the world','Computers never connect to the internet'],
    answer:0 },

  { id:'q_cl_adv', topic:'Cloud and ubiquitous', type:'multi', marks:2,
    stem:'Choose TWO advantages of storing your files in the cloud.',
    options:['You can get your files from anywhere with internet','Your files are backed up automatically','You never need an internet connection','It is impossible for anyone to hack'],
    answer:[0,1] },

  { id:'q_cl_device', topic:'Cloud and ubiquitous', type:'single', marks:1,
    stem:'Which of these is an example of ubiquitous computing?',
    options:['A smart watch','A filing cabinet','A paper diary','A whiteboard pen'],
    answer:0 },

  /* ---------------- Lesson 6: The internet (12) ---------------- */
  { id:'q_in_what', topic:'The internet', type:'single', marks:1,
    stem:'What is the internet?',
    options:['A global network of connected computers','A single very large computer','A type of web browser','A website for shopping'],
    answer:0 },

  { id:'q_in_vsweb', topic:'The internet', type:'single', marks:1,
    stem:'What is the difference between the internet and the World Wide Web?',
    options:['The internet is the network; the web is the pages you view','They are exactly the same thing','The web is the cables; the internet is the pages','The internet only works on phones'],
    answer:0 },

  { id:'q_in_infra', topic:'The internet', type:'match', marks:3,
    stem:'Match each part of an internet connection to its job.',
    left:['Client','Server','Router'],
    right:['The device that asks for a web page','Stores web pages and sends them back','Directs data along the best route'],
    answer:[0,1,2] },

  { id:'q_in_popnap', topic:'The internet', type:'match', marks:2,
    stem:'Match each term to its meaning.',
    left:['Point of Presence (PoP)','Network Access Point (NAP)'],
    right:['Where you join your ISP’s network','Where different ISPs meet to share data'],
    answer:[0,1] },

  { id:'q_in_isp', topic:'The internet', type:'single', marks:1,
    stem:'What do the letters ISP stand for?',
    options:['Internet Service Provider','Internal System Protocol','Instant Sharing Program','Internet Security Password'],
    answer:0 },

  { id:'q_in_ispserv', topic:'The internet', type:'multi', marks:2,
    stem:'Choose TWO services an ISP usually provides as well as internet access.',
    options:['An email account','Web space to host a website','A free laptop for every user','The internet backbone cables'],
    answer:[0,1] },

  { id:'q_in_wireless', topic:'The internet', type:'single', marks:1,
    stem:'Which connection method has no wires and is best for moving around with a phone or tablet?',
    options:['Wireless (Wi-Fi)','Dial-up','A fibre cable in the ground','An Ethernet cable'],
    answer:0 },

  { id:'q_in_band', topic:'The internet', type:'single', marks:1,
    stem:'What is the relationship between bandwidth and transmission rate?',
    options:['The transmission rate is usually lower than the bandwidth','They are always exactly the same','Bandwidth is always lower than the transmission rate','Neither is measured in bits per second'],
    answer:0 },

  /* ---------------- Lesson 7: The World Wide Web (8) ---------------- */
  { id:'q_ww_server', topic:'The World Wide Web', type:'single', marks:1,
    stem:'What is a web server?',
    options:['A computer that stores web pages and sends them out','Software you use to view web pages','The code used to build a web page','A company that sells internet access'],
    answer:0 },

  { id:'q_ww_url', topic:'The World Wide Web', type:'match', marks:3,
    stem:'A URL is  https://www.bbc.co.uk/news .  Match each part to its name.',
    left:['https://','www.bbc.co.uk','/news'],
    right:['Protocol','Domain name','Path'],
    answer:[0,1,2] },

  { id:'q_ww_http', topic:'The World Wide Web', type:'single', marks:1,
    stem:'What does HTTP do?',
    options:['Sets the rules for sending web pages to a browser','Builds the web page using tags','Stores the website on a server','Finds pages using an index'],
    answer:0 },

  { id:'q_ww_https', topic:'The World Wide Web', type:'single', marks:1,
    stem:'Why is HTTPS safer than HTTP?',
    options:['It encrypts the data so it is secure','It makes the page load in colour','It removes all adverts','It works without a browser'],
    answer:0 },

  { id:'q_ww_browser', topic:'The World Wide Web', type:'single', marks:1,
    stem:'Which of these is a web browser?',
    options:['Google Chrome','Google (search engine)','HTML','Wi-Fi'],
    answer:0 },

  { id:'q_ww_search', topic:'The World Wide Web', type:'single', marks:1,
    stem:'How does a search engine find web pages for you?',
    options:['It searches an index of pages built by web spiders','It phones each website to ask for its page','It only shows pages you have visited before','It builds a new web page each time'],
    answer:0 },

];

if (typeof module !== 'undefined' && module.exports) module.exports = { QUESTIONS };
