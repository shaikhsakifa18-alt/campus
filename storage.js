const Store = (() => {
  const keys = {jobs:"chJobs", applications:"chApplications", profile:"chProfile", saved:"chSaved", users:"chUsers"};
  const seedJobs = [
    {id:"J001",title:"Frontend Developer Intern",company:"PixelCraft Studio",type:"Internship",location:"Mumbai · Hybrid",salary:"₹12k–18k/mo",category:"Engineering",skills:["HTML","CSS","JavaScript"],description:"Work with the product team to build accessible, responsive interfaces. Ideal for students who enjoy turning designs into polished web experiences.",deadline:"2026-11-30",logo:"P",tone:""},
    {id:"J002",title:"Graduate Software Trainee",company:"Nexora Technologies",type:"Full-time",location:"Pune · On-site",salary:"₹4.5–6 LPA",category:"Engineering",skills:["JavaScript","SQL","Problem solving"],description:"Join a collaborative engineering team, learn modern development workflows and contribute to internal tools and customer-facing products.",deadline:"2026-12-05",logo:"N",tone:"teal"},
    {id:"J003",title:"UI/UX Design Intern",company:"Northstar Digital",type:"Internship",location:"Remote",salary:"₹10k–15k/mo",category:"Design",skills:["Figma","Wireframing","Prototyping"],description:"Support the design team with wireframes, user flows and high-fidelity prototypes for web and mobile experiences.",deadline:"2026-11-22",logo:"N",tone:"orange"},
    {id:"J004",title:"Data Analyst Intern",company:"BluePeak Analytics",type:"Internship",location:"Mumbai · Hybrid",salary:"₹15k/mo",category:"Data",skills:["Excel","SQL","Python"],description:"Help transform datasets into useful insights, prepare reports and collaborate with analysts on business questions.",deadline:"2026-12-12",logo:"B",tone:"teal"},
    {id:"J005",title:"IT Support Associate",company:"CloudBridge Systems",type:"Full-time",location:"Thane · On-site",salary:"₹3.2–4 LPA",category:"IT Support",skills:["Networking","Troubleshooting","Communication"],description:"Assist users with technical issues, document solutions and help maintain a reliable workplace technology environment.",deadline:"2026-11-28",logo:"C",tone:""},
    {id:"J006",title:"QA Testing Intern",company:"Orbit Apps",type:"Internship",location:"Remote",salary:"₹8k–12k/mo",category:"Quality Assurance",skills:["Testing","Documentation","Attention to detail"],description:"Create test cases, report reproducible issues and help the team improve product quality throughout the release cycle.",deadline:"2026-12-18",logo:"O",tone:"orange"}
  ];
  function read(key, fallback){try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch{return fallback;}}
  function write(key,value){localStorage.setItem(key,JSON.stringify(value));}
  function init(){
    if(!localStorage.getItem(keys.jobs))write(keys.jobs,seedJobs);
    // Remove the old hard-coded demo student and their sample applications from existing installs.
    const oldApps=read(keys.applications,[]).filter(a=>a.studentId!=="demo-student"&&!/aanya|ananya sharma/i.test(a.studentName||""));
    write(keys.applications,oldApps);
    const oldProfile=read(keys.profile,{});
    if(/aanya|ananya sharma/i.test(oldProfile.name||"")||/aanya@example\.com/i.test(oldProfile.email||""))write(keys.profile,{});
    else if(!localStorage.getItem(keys.profile))write(keys.profile,{});
    if(!localStorage.getItem(keys.saved))write(keys.saved,[]);
    if(!localStorage.getItem(keys.users))write(keys.users,[]);
  }
  init();
  return {getJobs:()=>read(keys.jobs,[]),saveJobs:v=>write(keys.jobs,v),getApplications:()=>read(keys.applications,[]),saveApplications:v=>write(keys.applications,v),getProfile:()=>read(keys.profile,{}),saveProfile:v=>write(keys.profile,v),getSaved:()=>read(keys.saved,[]),saveSaved:v=>write(keys.saved,v),getUsers:()=>read(keys.users,[]),saveUsers:v=>write(keys.users,v),reset:()=>{Object.values(keys).forEach(k=>localStorage.removeItem(k));init();}};
})();