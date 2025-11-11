// Transport Layer & Networking Questions - 110 questions
// The app will randomize answer positions (A/B/C/D) per question on each attempt
const NETWORKING_QUESTIONS = [
  {
    id: 1,
    question: "Which layer provides session multiplexing using ports?",
    choices: ["Physical", "Transport", "Network", "Data Link"],
    correct: 1 // Transport
  },
  {
    id: 2,
    question: "Session multiplexing allows:",
    choices: ["One app per device", "Multiple sessions over one host using different ports", "Only UDP sessions", "Only TCP sessions"],
    correct: 1
  },
  {
    id: 3,
    question: "In the example with ports 49001 and 49002, what is being demonstrated?",
    choices: ["Routing", "NAT", "Session multiplexing", "DNS caching"],
    correct: 2
  },
  {
    id: 4,
    question: "Segmentation in transport layer means:",
    choices: ["Aggregating frames", "Dividing data into smaller units", "Encrypting data", "Translating addresses"],
    correct: 1
  },
  {
    id: 5,
    question: "The maximum Ethernet frame size commonly referenced in the lecture is:",
    choices: ["64 bytes", "512 bytes", "1518 bytes", "9000 bytes"],
    correct: 2
  },
  {
    id: 6,
    question: "Connection-oriented transmission provides:",
    choices: ["No acknowledgements", "Acknowledgements and session teardown", "Only error detection", "Only flow control"],
    correct: 1
  },
  {
    id: 7,
    question: "Reliability in TCP includes:",
    choices: ["Only encryption", "Data correction and ordering", "NAT translation", "VLAN tagging"],
    correct: 1
  },
  {
    id: 8,
    question: "TCP is:",
    choices: ["A network layer protocol", "A transport layer protocol", "A data link protocol", "An application protocol"],
    correct: 1
  },
  {
    id: 9,
    question: "TCP uses:",
    choices: ["MAC addresses", "Port numbers", "VLAN IDs", "ARP entries"],
    correct: 1
  },
  {
    id: 10,
    question: "TCP is:",
    choices: ["Connectionless", "Connection-oriented", "Stateless", "Broadcast-based"],
    correct: 1
  },
  {
    id: 11,
    question: "TCP supports:",
    choices: ["Half-duplex only", "Full-duplex communication", "Simplex communication", "Multicast only"],
    correct: 1
  },
  {
    id: 12,
    question: "TCP error control uses:",
    choices: ["FCS only", "Checksum", "Parity bits", "Hash-only"],
    correct: 1
  },
  {
    id: 13,
    question: "TCP flow control helps:",
    choices: ["Speed up the sender indefinitely", "Prevent receiver buffer overflow", "Encrypt data", "Assign IP addresses"],
    correct: 1
  },
  {
    id: 14,
    question: "Sequencing in TCP ensures:",
    choices: ["Random packet order", "In-order delivery and reassembly", "ARP resolution", "DNS resolution"],
    correct: 1
  },
  {
    id: 15,
    question: "The process to establish a TCP connection is:",
    choices: ["Four-way handshake", "Three-way handshake", "Two-way handshake", "Handshake-less"],
    correct: 1
  },
  {
    id: 16,
    question: "In TCP, control bits are:",
    choices: ["VLAN tags", "Flags like SYN/ACK/FIN", "TTL indicators", "Port range markers"],
    correct: 1
  },
  {
    id: 17,
    question: "Flow control is primarily needed because:",
    choices: ["Routers are slow", "Receivers have finite buffer capacity", "DNS is slow", "NAT changes ports"],
    correct: 1
  },
  {
    id: 18,
    question: "If the sender outpaces the receiver without flow control:",
    choices: ["No issue occurs", "Packets may be dropped and retransmissions increase", "DNS fails", "MAC addresses change"],
    correct: 1
  },
  {
    id: 19,
    question: "TCP windowing allows:",
    choices: ["Sending one segment at a time only", "Multiple unacknowledged segments up to a window", "No acknowledgements", "Only fixed-size segments"],
    correct: 1
  },
  {
    id: 20,
    question: "Fixed windowing:",
    choices: ["Window size never changes", "Window size changes adaptively", "Is UDP-only", "Is at the application layer"],
    correct: 0
  },
  {
    id: 21,
    question: "Sliding window:",
    choices: ["Always zero", "Adjusts window size as ACKs are received", "Disables flow control", "Is only for ICMP"],
    correct: 1
  },
  {
    id: 22,
    question: "UDP stands for:",
    choices: ["User Datagram Protocol", "Unified Data Protocol", "Universal Data Packet", "User Data Path"],
    correct: 0
  },
  {
    id: 23,
    question: "UDP is:",
    choices: ["Reliable and connection-oriented", "Unreliable and connectionless", "Reliable and connectionless", "Unreliable but connection-oriented"],
    correct: 1
  },
  {
    id: 24,
    question: "UDP performs:",
    choices: ["Extensive error recovery", "Limited error checking", "No checksum at all", "Window-based flow control"],
    correct: 1
  },
  {
    id: 25,
    question: "UDP is best described as:",
    choices: ["Best-effort delivery", "Guaranteed delivery", "Ordered delivery", "Encrypted delivery"],
    correct: 0
  },
  {
    id: 26,
    question: "UDP may drop data due to:",
    choices: ["TTL expiry, routing errors, redundancy duplicates", "VLAN hopping", "SSH issues", "ARP failures only"],
    correct: 0
  },
  {
    id: 27,
    question: "UDP has:",
    choices: ["Data recovery features", "No data recovery features", "Sophisticated sequencing", "Sliding windows"],
    correct: 1
  },
  {
    id: 28,
    question: "Port numbers map:",
    choices: ["Hosts to IPs", "Processes to the transport layer", "MAC addresses to interfaces", "VLANs to trunks"],
    correct: 1
  },
  {
    id: 29,
    question: "Well-known ports range is:",
    choices: ["0–1023", "1024–49151", "49152–65535", "100–999"],
    correct: 0
  },
  {
    id: 30,
    question: "Registered ports range is:",
    choices: ["0–1023", "1024–49151", "49152–65535", "200–2000"],
    correct: 1
  },
  {
    id: 31,
    question: "Dynamic/ephemeral ports range is:",
    choices: ["0–1023", "1024–49151", "49152–65535", "1–65535"],
    correct: 2
  },
  {
    id: 32,
    question: "The authority associated with well-known ports is:",
    choices: ["IETF", "ICANN", "IEEE", "ISO"],
    correct: 1
  },
  {
    id: 33,
    question: "A socket address typically includes:",
    choices: ["IP + MAC", "IP + Port", "MAC + Port", "VLAN + IP"],
    correct: 1
  },
  {
    id: 34,
    question: "The `netstat -a` command helps you:",
    choices: ["View routing tables only", "View all connections and listening ports", "Change firewall rules", "Edit hosts file"],
    correct: 1
  },
  {
    id: 35,
    question: "The transport layer sits under:",
    choices: ["Application layer", "Data link layer", "Physical layer", "Internet layer"],
    correct: 0
  },
  {
    id: 36,
    question: "HTTP operates at:",
    choices: ["Transport layer", "Application layer", "Network layer", "Data link layer"],
    correct: 1
  },
  {
    id: 37,
    question: "A web browser acts as:",
    choices: ["A DNS server", "A web client", "A router", "A switch"],
    correct: 1
  },
  {
    id: 38,
    question: "In a URL, the host is:",
    choices: ["The port number", "The domain name", "The file path", "The protocol"],
    correct: 1
  },
  {
    id: 39,
    question: "Which of the following is optional in a URL?",
    choices: ["Protocol", "Host", "Port", "Path"],
    correct: 2
  },
  {
    id: 40,
    question: "DNS stands for:",
    choices: ["Data Network System", "Domain Name System", "Distributed Name Service", "Domain Number Server"],
    correct: 1
  },
  {
    id: 41,
    question: "DNS translates:",
    choices: ["IP to MAC", "Hostnames to IP addresses", "Ports to processes", "VLANs to subnets"],
    correct: 1
  },
  {
    id: 42,
    question: "Historically, hostname resolution first used:",
    choices: ["ARP cache", "Hosts file", "DHCP", "NAT table"],
    correct: 1
  },
  {
    id: 43,
    question: "Windows hosts file path is:",
    choices: ["C:\\Windows\\System32\\drivers\\etc", "C:\\Windows\\System32\\config", "C:\\Program Files\\hosts", "C:\\Windows\\etc\\hosts"],
    correct: 0
  },
  {
    id: 44,
    question: "Problems with using hosts file for the Internet include:",
    choices: ["Too few hosts", "Too many hosts and dynamic updates", "Lack of IP addresses", "Lack of ports"],
    correct: 1
  },
  {
    id: 45,
    question: "Typical DNS lookup order on a client:",
    choices: ["Ask DNS, then cache, then hosts file", "Cache, hosts file, then DNS server", "Hosts file, DNS server, then cache", "DHCP, ARP, then DNS"],
    correct: 1
  },
  {
    id: 46,
    question: "The `nslookup` utility:",
    choices: ["Queries DNS for name/IP resolution", "Captures packets", "Configures routing", "Edits the registry"],
    correct: 0
  },
  {
    id: 47,
    question: "Default FTP control port is:",
    choices: ["20", "21", "22", "23"],
    correct: 1
  },
  {
    id: 48,
    question: "In classic FTP, data transfer commonly uses port:",
    choices: ["20", "21", "22", "25"],
    correct: 0
  },
  {
    id: 49,
    question: "SMTP is used primarily for:",
    choices: ["Retrieving mail headers only", "Sending emails between servers/clients", "Downloading email to clients for offline", "Encrypting email"],
    correct: 1
  },
  {
    id: 50,
    question: "POP3 typically:",
    choices: ["Retrieves headers only", "Downloads messages to local disk", "Sends emails to servers", "Is used for remote shell"],
    correct: 1
  },
  {
    id: 51,
    question: "IMAP4 typically:",
    choices: ["Retrieves only message headers (with server-stored mail)", "Downloads everything by default", "Sends mail between servers", "Replaces SMTP"],
    correct: 0
  },
  {
    id: 52,
    question: "Telnet uses port:",
    choices: ["21", "22", "23", "25"],
    correct: 2
  },
  {
    id: 53,
    question: "SSH uses port:",
    choices: ["20", "21", "22", "23"],
    correct: 2
  },
  {
    id: 54,
    question: "RDP is primarily used for:",
    choices: ["Email transfer", "Remote desktop access", "File upload", "DNS lookups"],
    correct: 1
  },
  {
    id: 55,
    question: "A NIC operates at which OSI layer?",
    choices: ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"],
    correct: 0
  },
  {
    id: 56,
    question: "The NIC has a built-in address called:",
    choices: ["IP address", "MAC address", "Port number", "VLAN ID"],
    correct: 1
  },
  {
    id: 57,
    question: "A repeater operates at:",
    choices: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
    correct: 0
  },
  {
    id: 58,
    question: "A hub is:",
    choices: ["Multiport switch", "Multiport repeater", "Router", "Bridge with routing"],
    correct: 1
  },
  {
    id: 59,
    question: "Hubs:",
    choices: ["Create separate collision domains per port", "Share one collision domain", "Eliminate broadcasts", "Are layer 3 devices"],
    correct: 1
  },
  {
    id: 60,
    question: "CSMA/CD is relevant to:",
    choices: ["Wireless full-duplex", "Ethernet shared media collision handling", "WAN routing", "DNS caching"],
    correct: 1
  },
  {
    id: 61,
    question: "A layer 2 switch forwards based on:",
    choices: ["IP addresses", "MAC addresses", "Port numbers", "Hostnames"],
    correct: 1
  },
  {
    id: 62,
    question: "A layer 3 switch forwards based on:",
    choices: ["VLAN IDs", "IP addresses", "MAC addresses", "Port numbers"],
    correct: 1
  },
  {
    id: 63,
    question: "Routers operate at:",
    choices: ["Physical layer", "Data link layer", "Network layer", "Application layer"],
    correct: 2
  },
  {
    id: 64,
    question: "Router core functions include:",
    choices: ["Path determination and packet forwarding", "Encryption and compression", "DNS resolution", "Email relaying"],
    correct: 0
  },
  {
    id: 65,
    question: "A splitter divides:",
    choices: ["Ethernet frames", "Telephone signals into frequency ranges", "IP packets by TTL", "VLANs by ID"],
    correct: 1
  },
  {
    id: 66,
    question: "Typical home 'router' often also acts as:",
    choices: ["Switch, DHCP server, firewall, access point", "DNS root server", "ISP backbone", "L4 load balancer only"],
    correct: 0
  },
  {
    id: 67,
    question: "UTP is:",
    choices: ["Shielded twisted pair", "Unshielded twisted pair", "Fiber optic", "Coaxial"],
    correct: 1
  },
  {
    id: 68,
    question: "STP compared to UTP is:",
    choices: ["Less protected and cheaper", "More protected and harder to install", "Wireless only", "Fiber only"],
    correct: 1
  },
  {
    id: 69,
    question: "Coaxial cable is commonly used for:",
    choices: ["Voice only", "Video transfer", "SSH", "DNS"],
    correct: 1
  },
  {
    id: 70,
    question: "Single-mode fiber characteristics include:",
    choices: ["Multiple light rays, short distance", "Single light ray, small core, long distance", "Copper core, long distance", "Plastic core only, short distance"],
    correct: 1
  },
  {
    id: 71,
    question: "Fiber advantages include:",
    choices: ["Susceptible to EMI", "High data rate, long distance, EMI immunity", "Very cheap and easy to install", "Requires repeaters every 10m"],
    correct: 1
  },
  {
    id: 72,
    question: "A drawback of fiber is:",
    choices: ["Very low bandwidth", "High susceptibility to eavesdropping", "Higher cost and harder installation", "Requires hubs"],
    correct: 2
  },
  {
    id: 73,
    question: "WLANs:",
    choices: ["Use MAC addresses and look like wired networks to users", "Do not use MAC addresses", "Replace IP layer", "Only support SMTP"],
    correct: 0
  },
  {
    id: 74,
    question: "SSID is:",
    choices: ["A wireless encryption key", "Network name identifier", "IP address", "Port number"],
    correct: 1
  },
  {
    id: 75,
    question: "SSID must:",
    choices: ["Be unique across the Internet", "Match between client and AP for connection", "Be 64 characters minimum", "Be hidden always"],
    correct: 1
  },
  {
    id: 76,
    question: "Ad hoc mode is also called:",
    choices: ["Infrastructure mode", "Independent mode", "Mesh backbone", "Splitter mode"],
    correct: 1
  },
  {
    id: 77,
    question: "Infrastructure mode uses:",
    choices: ["Direct client-to-client only", "An access point to connect clients and network", "A router only", "Fiber only"],
    correct: 1
  },
  {
    id: 78,
    question: "A disadvantage of wireless compared to wired:",
    choices: ["Less mobility", "Lower bandwidth and more security concerns", "Requires trenches", "No need for SSID"],
    correct: 1
  },
  {
    id: 79,
    question: "The application layer of TCP/IP handles:",
    choices: ["Communication between processes/applications", "Routing", "Switching", "Segmentation and reassembly"],
    correct: 0
  },
  {
    id: 80,
    question: "Which protocol is NOT an email protocol?",
    choices: ["SMTP", "POP3", "IMAP4", "RDP"],
    correct: 3
  },
  {
    id: 81,
    question: "HTTPS typically uses which well-known port?",
    choices: ["80", "443", "21", "110"],
    correct: 1
  },
  {
    id: 82,
    question: "DNS hierarchy top is represented by:",
    choices: ["'root' labeled as '/'", "'.' (dot)", "'com'", "'www'"],
    correct: 1
  },
  {
    id: 83,
    question: "TTL in IP primarily affects:",
    choices: ["Encryption strength", "Packet lifetime (potential data loss on expiry)", "Port mapping", "VLAN tagging"],
    correct: 1
  },
  {
    id: 84,
    question: "TCP acknowledgements help with:",
    choices: ["Address resolution", "Reliability and retransmission decisions", "VLAN pruning", "SSID broadcast"],
    correct: 1
  },
  {
    id: 85,
    question: "Which is connectionless?",
    choices: ["TCP", "UDP", "SSH", "HTTP"],
    correct: 1
  },
  {
    id: 86,
    question: "Which best describes TCP checksum?",
    choices: ["Used for VLAN tagging", "Used for error checking of segment", "Used for MAC learning", "Used to choose port numbers"],
    correct: 1
  },
  {
    id: 87,
    question: "Mapping Layer 4 to applications means:",
    choices: ["Applications use protocol ports", "IP addresses are mapped to MACs", "VLANs are mapped to trunks", "URLs are mapped to hosts"],
    correct: 0
  },
  {
    id: 88,
    question: "The main function distinguishing a router from a switch:",
    choices: ["Error checking", "Layer 3 path selection based on IP", "Half-duplex operation", "Flooding only"],
    correct: 1
  },
  {
    id: 89,
    question: "Hubs operate in:",
    choices: ["Full duplex", "Half duplex", "Simplex only", "Full duplex only"],
    correct: 1
  },
  {
    id: 90,
    question: "A broadcast domain in a hub:",
    choices: ["Is per-port isolated", "Is shared by all ports", "Does not exist", "Is layer 3 only"],
    correct: 1
  },
  {
    id: 91,
    question: "Switches reduce:",
    choices: ["Collision domains per host", "Number of VLANs", "IP subnets", "Port numbers"],
    correct: 0
  },
  {
    id: 92,
    question: "Layer 3 switch typically does NOT provide:",
    choices: ["Inter-VLAN routing", "WAN connectivity by default", "IP forwarding", "Routing between VLANs"],
    correct: 1
  },
  {
    id: 93,
    question: "The main reason for using DNS servers over hosts file:",
    choices: ["Better encryption", "Centralized, scalable, dynamic name resolution", "Eliminates TCP", "Replaces routing protocols"],
    correct: 1
  },
  {
    id: 94,
    question: "Which is a top-level domain (TLD) example?",
    choices: ["www", ".com", "microsoft", "192.168.1.1"],
    correct: 1
  },
  {
    id: 95,
    question: "The URL part '/ar-ww/microsoft-365/' is the:",
    choices: ["Host", "Protocol", "Path", "Port"],
    correct: 2
  },
  {
    id: 96,
    question: "The protocol in 'https://example.com' is:",
    choices: ["HTTP", "HTTPS", "FTP", "DNS"],
    correct: 1
  },
  {
    id: 97,
    question: "A common Windows command to see active TCP connections numerically:",
    choices: ["netstat -n", "ipconfig /flushdns", "arp -a", "route print -v"],
    correct: 0
  },
  {
    id: 98,
    question: "Which device is strictly a Layer 1 device?",
    choices: ["Switch", "Router", "Repeater", "Firewall"],
    correct: 2
  },
  {
    id: 99,
    question: "NICs can be:",
    choices: ["Only internal", "Internal or external (e.g., wireless/USB)", "Only wireless", "Only USB"],
    correct: 1
  },
  {
    id: 100,
    question: "The BNC connector is associated with:",
    choices: ["Fiber", "Coaxial cable", "UTP", "STP"],
    correct: 1
  },
  {
    id: 101,
    question: "Multi-mode fiber typically:",
    choices: ["Single light ray, long distance", "Multiple light rays, shorter distance than single-mode", "Copper medium, short distance", "No cladding"],
    correct: 1
  },
  {
    id: 102,
    question: "The cladding in fiber optic:",
    choices: ["Amplifies the signal", "Keeps the signal in the core via total internal reflection", "Encrypts the signal", "Is the connector"],
    correct: 1
  },
  {
    id: 103,
    question: "WLANs use:",
    choices: ["The same IP, TCP/UDP protocols as wired", "Different IP protocol", "Only UDP", "Only ICMP"],
    correct: 0
  },
  {
    id: 104,
    question: "Hiding the SSID:",
    choices: ["Is required for any connection", "Prevents all attacks", "Is optional; SSID may be broadcast or hidden", "Disables DHCP"],
    correct: 2
  },
  {
    id: 105,
    question: "Wireless advantages include:",
    choices: ["Mobility and no cabling in hard areas", "Highest security and bandwidth vs. wired", "Guaranteed reliability", "No need for configuration"],
    correct: 0
  },
  {
    id: 106,
    question: "TCP data recovery may include:",
    choices: ["Retransmissions based on ACKs/timeouts", "ARP cache refresh", "VLAN trunking", "Split horizon"],
    correct: 0
  },
  {
    id: 107,
    question: "UDP is preferred when:",
    choices: ["Ordered, reliable delivery is critical", "Low overhead and latency are preferred", "Connection state is required", "Flow control is needed"],
    correct: 1
  },
  {
    id: 108,
    question: "HTTPS typically provides:",
    choices: ["Unencrypted transport", "Encrypted HTTP over TLS", "FTP over SSH", "DNS over TCP only"],
    correct: 1
  },
  {
    id: 109,
    question: "A home router often provides wireless via:",
    choices: ["Built-in access point functionality", "External DNS root service", "None; requires an ISP backbone", "Dedicated fiber switch"],
    correct: 0
  },
  {
    id: 110,
    question: "Using `nslookup` you can:",
    choices: ["Query A and AAAA records", "Configure routing tables", "Check port states", "Change MAC addresses"],
    correct: 0
  }
];
