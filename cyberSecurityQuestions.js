// Cyber Security Essentials Questions
// All questions with correct answers marked
const CYBER_SECURITY_QUESTIONS = [
  {
    id: 1,
    question: "What are the three main goals of Information Security?",
    choices: ["Confidentiality, Integrity, Availability", "Privacy, Security, Safety", "Protection, Detection, Response", "Authentication, Authorization, Accounting"],
    correct: 0
  },
  {
    id: 2,
    question: "Confidentiality ensures that:",
    choices: ["Data is always available", "Information is not revealed to unauthorized persons", "Data cannot be modified", "Systems are always operational"],
    correct: 1
  },
  {
    id: 3,
    question: "Integrity in cyber security means:",
    choices: ["Data is always encrypted", "Ensuring consistency of data and detecting modifications", "Unauthorized access is prevented", "Backups are maintained"],
    correct: 1
  },
  {
    id: 4,
    question: "Availability ensures that:",
    choices: ["Data is encrypted", "Legitimate users are not denied access to information and resources", "Passwords are strong", "Firewalls are active"],
    correct: 1
  },
  {
    id: 5,
    question: "Why is 100% security impossible?",
    choices: ["It's too expensive", "New technologies create new vulnerabilities", "Users don't care", "Firewalls are not perfect"],
    correct: 1
  },
  {
    id: 6,
    question: "Vulnerability is defined as:",
    choices: ["A person who attacks systems", "The degree of weakness found in every network and device", "A type of malware", "An attack method"],
    correct: 1
  },
  {
    id: 7,
    question: "A threat is:",
    choices: ["Software that protects systems", "A person, thing, event or idea which poses danger to an asset", "A type of firewall", "An encryption method"],
    correct: 1
  },
  {
    id: 8,
    question: "Black hat hackers are also known as:",
    choices: ["Security Analysts", "Ethical hackers", "Crackers", "Administrators"],
    correct: 2
  },
  {
    id: 9,
    question: "White hat hackers are known as:",
    choices: ["Crackers", "Malicious hackers", "Security Analysts or Ethical hackers", "Script kiddies"],
    correct: 2
  },
  {
    id: 10,
    question: "Gray hat hackers:",
    choices: ["Only work defensively", "Only work offensively", "Work both offensively and defensively at various times", "Don't exist"],
    correct: 2
  },
  {
    id: 11,
    question: "The first phase of the attacker's methodology is:",
    choices: ["Scanning", "Gaining access", "Reconnaissance", "Covering tracks"],
    correct: 2
  },
  {
    id: 12,
    question: "Reconnaissance refers to:",
    choices: ["Scanning for open ports", "The preparatory phase where an attacker gathers information", "Exploiting the system", "Removing evidence"],
    correct: 1
  },
  {
    id: 13,
    question: "During reconnaissance, attackers may:",
    choices: ["Exploit vulnerabilities", "Browse and search the internet for organization info", "Install backdoors", "Delete log files"],
    correct: 1
  },
  {
    id: 14,
    question: "Scanning phase involves:",
    choices: ["Gathering general information", "Scanning the network for open ports, OS, applications", "Maintaining system access", "Social engineering"],
    correct: 1
  },
  {
    id: 15,
    question: "What can be discovered during the scanning phase?",
    choices: ["Company history", "Open ports, operating systems, applications, open shares", "Employee passwords", "Physical location"],
    correct: 1
  },
  {
    id: 16,
    question: "Gaining Access refers to:",
    choices: ["The reconnaissance phase", "The true attack phase when the hacker exploits the system", "Removing evidence", "Social engineering only"],
    correct: 1
  },
  {
    id: 17,
    question: "Examples of exploits during Gaining Access include:",
    choices: ["Reading public websites", "Buffer overflows, denial of service, session hijacking", "Port scanning", "DNS lookups"],
    correct: 1
  },
  {
    id: 18,
    question: "Maintaining Access refers to:",
    choices: ["Initial reconnaissance", "The phase when the hacker tries to retain ownership of the system", "Scanning for vulnerabilities", "Social engineering"],
    correct: 1
  },
  {
    id: 19,
    question: "Why do hackers sometimes harden the system from other hackers?",
    choices: ["To be helpful", "To own the system exclusively", "To improve security", "To avoid detection"],
    correct: 1
  },
  {
    id: 20,
    question: "Covering Tracks involves:",
    choices: ["Initial system scanning", "Activities to extend misuse without being detected", "Installing antivirus", "Reporting vulnerabilities"],
    correct: 1
  },
  {
    id: 21,
    question: "Reasons for covering tracks include:",
    choices: ["Improving system security", "Continued use of resources and avoiding legal action", "Helping administrators", "Testing security"],
    correct: 1
  },
  {
    id: 22,
    question: "An attack is defined as:",
    choices: ["A security measure", "Any attempt to destroy, expose, alter, disable, steal or gain unauthorized access to an asset", "A type of firewall", "An encryption method"],
    correct: 1
  },
  {
    id: 23,
    question: "A passive attack:",
    choices: ["Changes system resources", "Takes information without affecting system resources or operations", "Destroys data", "Installs malware"],
    correct: 1
  },
  {
    id: 24,
    question: "Examples of passive attacks include:",
    choices: ["Ransomware, Viruses", "Cookies, Spyware, Wireshark", "Buffer overflow", "DDoS"],
    correct: 1
  },
  {
    id: 25,
    question: "An active attack:",
    choices: ["Only observes data", "Attempts to change system resources or affect their operations", "Is always undetectable", "Uses only social engineering"],
    correct: 1
  },
  {
    id: 26,
    question: "Examples of active attacks include:",
    choices: ["Cookies, Spyware", "Ransomware, Viruses, Worms", "Port scanning", "Network monitoring"],
    correct: 1
  },
  {
    id: 27,
    question: "Social engineering refers to:",
    choices: ["Programming techniques", "The ability to influence the behavior of a group of people", "Network configuration", "Firewall rules"],
    correct: 1
  },
  {
    id: 28,
    question: "In a phishing attack, the hacker:",
    choices: ["Scans for open ports", "Creates a fake website to trick users into revealing credentials", "Installs antivirus", "Performs reconnaissance"],
    correct: 1
  },
  {
    id: 29,
    question: "Phishing attacks commonly use:",
    choices: ["Only phone calls", "Email messages or SMS trying to trick users into clicking malicious links", "Only physical mail", "Radio broadcasts"],
    correct: 1
  },
  {
    id: 30,
    question: "In a hijack attack:",
    choices: ["A website is copied", "A hacker takes over a session and disconnects one party", "Passwords are guessed", "Ports are scanned"],
    correct: 1
  },
  {
    id: 31,
    question: "In a spoof attack, the hacker:",
    choices: ["Creates fake websites", "Modifies the source address of packets to appear from someone else", "Installs malware", "Scans networks"],
    correct: 1
  },
  {
    id: 32,
    question: "The purpose of a spoof attack may be to:",
    choices: ["Improve performance", "Bypass firewall rules", "Increase bandwidth", "Improve security"],
    correct: 1
  },
  {
    id: 33,
    question: "A buffer overflow attack occurs when:",
    choices: ["Too many users log in", "The attacker sends more data to an application than expected", "A password is cracked", "A virus spreads"],
    correct: 1
  },
  {
    id: 34,
    question: "A buffer overflow attack usually results in:",
    choices: ["System slowdown", "Attacker gaining administrative access to the system", "Data encryption", "Network congestion"],
    correct: 1
  },
  {
    id: 35,
    question: "A password attack attempts to:",
    choices: ["Create strong passwords", "Crack passwords stored in network accounts or password-protected files", "Encrypt passwords", "Reset passwords"],
    correct: 1
  },
  {
    id: 36,
    question: "The three main types of password attacks are:",
    choices: ["Fast, Medium, Slow", "Dictionary, Brute-force, Hybrid", "Active, Passive, Mixed", "Online, Offline, Remote"],
    correct: 1
  },
  {
    id: 37,
    question: "A dictionary attack uses:",
    choices: ["Random characters", "A word list file with potential passwords", "Only numbers", "Biometric data"],
    correct: 1
  },
  {
    id: 38,
    question: "A brute-force attack:",
    choices: ["Uses a word list", "Tries every possible combination of characters", "Only tries common passwords", "Uses social engineering"],
    correct: 1
  },
  {
    id: 39,
    question: "A hybrid attack:",
    choices: ["Only uses dictionary words", "Builds on dictionary attack by adding numerals and symbols to words", "Only uses numbers", "Doesn't exist"],
    correct: 1
  },
  {
    id: 40,
    question: "Malware capabilities include:",
    choices: ["Improving system performance", "Destruction of data, leaking confidential information, providing backdoor access", "Optimizing networks", "Enhancing security"],
    correct: 1
  },
  {
    id: 41,
    question: "A backdoor is:",
    choices: ["A type of firewall", "A secret entry point into a program allowing bypassing of security procedures", "An encryption method", "A network protocol"],
    correct: 1
  },
  {
    id: 42,
    question: "The only way to remove a backdoor is typically to:",
    choices: ["Run antivirus", "Uninstall software or format the system", "Update the firewall", "Change passwords"],
    correct: 1
  },
  {
    id: 43,
    question: "A virus is:",
    choices: ["A standalone program", "Malicious software attached to another program to execute unwanted functions", "A hardware device", "A network protocol"],
    correct: 1
  },
  {
    id: 44,
    question: "A virus both:",
    choices: ["Encrypts and decrypts data", "Propagates itself and carries a payload", "Scans and repairs systems", "Backs up and restores data"],
    correct: 1
  },
  {
    id: 45,
    question: "A Trojan horse is:",
    choices: ["A type of firewall", "A program with hidden side-effects that appears superficially attractive", "An encryption algorithm", "A network device"],
    correct: 1
  },
  {
    id: 46,
    question: "Trojans are often used to:",
    choices: ["Improve performance", "Propagate viruses/worms, install backdoors, or destroy data", "Optimize networks", "Backup data"],
    correct: 1
  },
  {
    id: 47,
    question: "Examples of Trojan disguises include:",
    choices: ["Antivirus software", "Games or software upgrades", "Operating systems", "Firewalls"],
    correct: 1
  },
  {
    id: 48,
    question: "A worm is:",
    choices: ["A virus that requires user action", "A replicating but not infecting program that spreads over networks", "A hardware component", "An encryption key"],
    correct: 1
  },
  {
    id: 49,
    question: "Worms typically spread by:",
    choices: ["Physical media only", "Using distributed privileges or exploiting system vulnerabilities", "Email only", "USB drives only"],
    correct: 1
  },
  {
    id: 50,
    question: "Worms are widely used by hackers to:",
    choices: ["Improve security", "Create zombie PCs for further attacks like DDoS", "Optimize networks", "Backup systems"],
    correct: 1
  },
  {
    id: 51,
    question: "A zombie is:",
    choices: ["Dead malware", "A program that secretly takes over a computer to launch attacks", "An antivirus program", "A backup system"],
    correct: 1
  },
  {
    id: 52,
    question: "Zombies are often used to launch:",
    choices: ["System updates", "Distributed Denial of Service (DDoS) attacks", "Backups", "Virus scans"],
    correct: 1
  },
  {
    id: 53,
    question: "Denial of Service (DoS) is about:",
    choices: ["Improving services", "Knocking off services without permission, often by crashing the system", "Optimizing performance", "Backing up data"],
    correct: 1
  },
  {
    id: 54,
    question: "DoS attacks are:",
    choices: ["Hard to launch and easy to defend against", "Easy to launch and hard to protect against", "Impossible to execute", "Only theoretical"],
    correct: 1
  },
  {
    id: 55,
    question: "DoS attacks can consume:",
    choices: ["Only bandwidth", "Host resources (memory, processor) and network resources (bandwidth)", "Only disk space", "Only power"],
    correct: 1
  },
  {
    id: 56,
    question: "A DDoS attack:",
    choices: ["Uses a single machine", "Uses multiple machines to prevent legitimate use of a service", "Is less severe than DoS", "Only targets email servers"],
    correct: 1
  },
  {
    id: 57,
    question: "DDoS attacks work by:",
    choices: ["Encrypting data", "Flooding with useless traffic using large numbers of zombies", "Improving performance", "Backing up data"],
    correct: 1
  },
  {
    id: 58,
    question: "Spyware is:",
    choices: ["Security software", "Any program that gathers personal information without permission", "An operating system", "A network protocol"],
    correct: 1
  },
  {
    id: 59,
    question: "Information gathered by spyware can include:",
    choices: ["Only browsing history", "Passwords and account numbers", "Only cookies", "Only IP addresses"],
    correct: 1
  },
  {
    id: 60,
    question: "Tracking cookies are:",
    choices: ["Always malicious", "A form of spyware used to record information about Internet users", "Hardware devices", "Encryption keys"],
    correct: 1
  },
  {
    id: 61,
    question: "Spam is:",
    choices: ["A security measure", "Unsolicited email that can overload ISPs and email servers", "A firewall type", "An encryption method"],
    correct: 1
  },
  {
    id: 62,
    question: "A person responsible for sending spam is called:",
    choices: ["Administrator", "Spammer", "White hat", "Analyst"],
    correct: 1
  },
  {
    id: 63,
    question: "Spammers often use:",
    choices: ["Only legitimate email servers", "Unsecured email servers and compromised home computers", "Only corporate servers", "Only government servers"],
    correct: 1
  },
  {
    id: 64,
    question: "A firewall is used to:",
    choices: ["Speed up the network", "Control incoming and outgoing network traffic based on security rules", "Increase bandwidth", "Store data"],
    correct: 1
  },
  {
    id: 65,
    question: "Static firewalls:",
    choices: ["Adapt to traffic patterns", "Use predefined rules that don't change", "Learn from attacks", "Are AI-based"],
    correct: 1
  },
  {
    id: 66,
    question: "Dynamic firewalls:",
    choices: ["Never change rules", "Can adapt and modify rules based on traffic patterns and threats", "Are outdated", "Don't exist"],
    correct: 1
  },
  {
    id: 67,
    question: "IDS stands for:",
    choices: ["Internet Data Service", "Intrusion Detection System", "Internal Database System", "Internet Defense Shield"],
    correct: 1
  },
  {
    id: 68,
    question: "IPS stands for:",
    choices: ["Internet Protocol Security", "Intrusion Prevention System", "Internal Protection Service", "Internet Provider System"],
    correct: 1
  },
  {
    id: 69,
    question: "The main difference between IDS and IPS is:",
    choices: ["IDS is newer", "IDS detects and alerts; IPS detects and takes action to prevent", "IPS is slower", "They are the same"],
    correct: 1
  },
  {
    id: 70,
    question: "VPN stands for:",
    choices: ["Virtual Private Network", "Very Private Network", "Visible Public Network", "Variable Protocol Network"],
    correct: 0
  },
  {
    id: 71,
    question: "A VPN provides:",
    choices: ["Faster internet", "Secure encrypted connection over a public network", "More bandwidth", "Better routing"],
    correct: 1
  },
  {
    id: 72,
    question: "A proxy server acts as:",
    choices: ["A virus scanner", "An intermediary between clients and the internet", "A firewall only", "A router"],
    correct: 1
  },
  {
    id: 73,
    question: "Next Generation Firewalls (NGFW) provide:",
    choices: ["Only basic packet filtering", "Advanced features like deep packet inspection, IPS, and application awareness", "Only port blocking", "No additional features"],
    correct: 1
  },
  {
    id: 74,
    question: "Encryption is the process of:",
    choices: ["Deleting data", "Converting data into a coded format to prevent unauthorized access", "Backing up data", "Compressing data"],
    correct: 1
  },
  {
    id: 75,
    question: "Symmetric key cryptography uses:",
    choices: ["Different keys for encryption and decryption", "The same key for both encryption and decryption", "No keys", "Public keys only"],
    correct: 1
  },
  {
    id: 76,
    question: "Asymmetric key cryptography uses:",
    choices: ["The same key for encryption and decryption", "A pair of keys: public and private", "No encryption", "Only passwords"],
    correct: 1
  },
  {
    id: 77,
    question: "In asymmetric cryptography, data encrypted with the public key can be decrypted with:",
    choices: ["Any key", "The corresponding private key", "Another public key", "No key needed"],
    correct: 1
  },
  {
    id: 78,
    question: "A digital signature is used to:",
    choices: ["Encrypt data", "Verify the authenticity and integrity of a message or document", "Compress files", "Delete data"],
    correct: 1
  },
  {
    id: 79,
    question: "A digital certificate:",
    choices: ["Is a type of malware", "Is an electronic document that proves ownership of a public key", "Is a firewall rule", "Is a password"],
    correct: 1
  },
  {
    id: 80,
    question: "Network security involves:",
    choices: ["Only installing antivirus", "Implementation of security devices, policies, and processes to prevent unauthorized access", "Only using strong passwords", "Only updating software"],
    correct: 1
  },
  {
    id: 81,
    question: "Resources that need security protection include:",
    choices: ["Only servers", "End-user devices, network resources, and server resources", "Only routers", "Only databases"],
    correct: 1
  },
  {
    id: 82,
    question: "The CIA triad in security stands for:",
    choices: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Computer Information Access", "Cyber Internet Authentication"],
    correct: 1
  },
  {
    id: 83,
    question: "Which is NOT a phase of the attacker's methodology?",
    choices: ["Reconnaissance", "Scanning", "Encryption", "Covering tracks"],
    correct: 2
  },
  {
    id: 84,
    question: "Port scanner tools are used during which phase?",
    choices: ["Covering tracks", "Scanning", "Maintaining access", "Social engineering"],
    correct: 1
  },
  {
    id: 85,
    question: "Which type of hacker uses their skills for defensive purposes?",
    choices: ["Black hat", "Gray hat", "White hat", "Script kiddie"],
    correct: 2
  },
  {
    id: 86,
    question: "Cyber Security is described as:",
    choices: ["Only an IT department responsibility", "A shared responsibility that each person must accept", "Not important for home users", "Only for government"],
    correct: 1
  },
  {
    id: 87,
    question: "Which attack type involves observing data without modifying it?",
    choices: ["Active attack", "Passive attack", "Hybrid attack", "Buffer overflow"],
    correct: 1
  },
  {
    id: 88,
    question: "What is the major issue with permanently connected systems regarding worms?",
    choices: ["Too much bandwidth usage", "Lack of security making them vulnerable", "High cost", "Low performance"],
    correct: 1
  },
  {
    id: 89,
    question: "Which malware type requires good software development and updates to prevent?",
    choices: ["Virus", "Backdoor", "Spam", "Cookie"],
    correct: 1
  },
  {
    id: 90,
    question: "The main advantage of symmetric encryption over asymmetric is:",
    choices: ["Better security", "Faster processing speed", "No key needed", "Works without internet"],
    correct: 1
  },
  {
    id: 91,
    question: "What makes phishing attacks effective?",
    choices: ["Advanced hacking tools", "Social engineering and user deception", "Powerful computers", "Government support"],
    correct: 1
  },
  {
    id: 92,
    question: "In the context of security, 'hardening' means:",
    choices: ["Making hardware stronger", "Securing a system by reducing vulnerabilities", "Encrypting all data", "Installing more RAM"],
    correct: 1
  },
  {
    id: 93,
    question: "Which is the most difficult password attack type to execute?",
    choices: ["Dictionary attack", "Brute-force attack", "Hybrid attack", "Social engineering"],
    correct: 1
  },
  {
    id: 94,
    question: "What do hackers do during the 'Maintaining Access' phase?",
    choices: ["Delete all data", "Try to retain ownership and continued access to the compromised system", "Send spam", "Install antivirus"],
    correct: 1
  },
  {
    id: 95,
    question: "Which security measure provides both detection and prevention capabilities?",
    choices: ["Firewall", "IPS (Intrusion Prevention System)", "VPN", "Proxy"],
    correct: 1
  },
  {
    id: 96,
    question: "What is the primary purpose of a VPN?",
    choices: ["Increase internet speed", "Create a secure encrypted tunnel over public networks", "Block all traffic", "Store passwords"],
    correct: 1
  },
  {
    id: 97,
    question: "Trojans differ from viruses because they:",
    choices: ["Are more dangerous", "Don't self-replicate and appear as legitimate software", "Only affect Windows", "Cannot be removed"],
    correct: 1
  },
  {
    id: 98,
    question: "The weakest link in security is often:",
    choices: ["Firewalls", "Encryption", "People/Users", "Routers"],
    correct: 2
  },
  {
    id: 99,
    question: "What makes a Next Generation Firewall 'next generation'?",
    choices: ["It's newer", "Advanced features like application awareness and deep packet inspection", "It's faster", "It's cheaper"],
    correct: 1
  },
  {
    id: 100,
    question: "Which statement about security is TRUE?",
    choices: ["100% security is achievable with enough money", "Security is impossible to implement", "Security involves managing risk, not eliminating it", "Only large companies need security"],
    correct: 2
  }
];
