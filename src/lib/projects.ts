import { projectSummaries } from "./project-summaries";
import { getTechDoc, getTechIcon, techStack } from "./techstack";
import type { Blog, Project } from "./types";

type SharedFields = Pick<
  Project,
  | "title"
  | "logo"
  | "primaryColor"
  | "icon"
  | "iconClassName"
  | "category"
  | "date"
  | "description"
  | "technologies"
  | "status"
  | "blogUrl"
  | "liveUrl"
  | "githubUrl"
  | "gameUrl"
> &
  Pick<Blog, "projectUrl">;

type RawProject = Omit<Project, keyof SharedFields>;
type RawBlog = Omit<Blog, keyof SharedFields>;

function applySharedFields<T extends { slug: string }>(entry: T): T & SharedFields {
  const summary = projectSummaries[entry.slug];
  if (!summary) {
    throw new Error(`Missing shared project/blog summary for slug: ${entry.slug}`);
  }

  return {
    ...entry,
    ...summary,
  };
}

const rawProjects: RawProject[] = [
  {
    slug: "ramai",
    colors: ["#2e3ffa", "#1d46fd"],
    image: "/ramai-home.png",
    carouselImages: ["/ramai-chat.png", "/ramai-ag.png", "/ramai-search.png", "/ramai-ranks.png"],
    problemItSolves: "When trying to find an answer to a question about professors at Suffolk University, scrolling through pages of professor information and reviews can be time consuming. Especially when time is limited, like when you're registering for classes and trying to decide between professors, it can be hard to find the information you need quickly.",
    keyFeatures: [
      {
        title: "Smart Chat Router",
        description:
          "A lightweight router classifies each message and decides whether to answer directly, ask a clarifying question, or trigger a grounded data lookup, keeping responses fast and on-topic without forcing every query through a rigid pipeline.",
      },
      {
        title: "Evidence-First AI Answers",
        description:
          "Instead of thin summaries, the AI reads directly from raw review snippets, tags, and course metrics before drafting a response. Supporting evidence is surfaced alongside the answer, making the system transparent rather than a black box.",
      },
      {
        title: "Comprehensive Professor Discovery",
        description:
          "Includes a comprehensive library with search functionality, keeping 1200+ professors easily discoverable.",
      },
      {
        title: "Detailed Professor Profiles",
        description:
          "View professor information including name, department, average ratings, and recent student reviews all in one place.",
      },
    ],
    challenges: [
      {
        title: "Context Bleeding",
        description:
          "The AI would carry over department or trait context from earlier messages and use it to silently block valid matches in the current query. Fixing this required carefully scoping what state persists across turns and what gets reset per message.",
      },
      {
        title: "Brittle Name Matching",
        description:
          "Stray spaces, punctuation differences, and partial names were enough to make the AI claim a professor didn't exist when they were right there in the data. Robust fuzzy matching and text normalization had to be built into the retrieval layer.",
      },
      {
        title: "Groundedness vs. Helpfulness",
        description:
          "Balancing a cautious, evidence-bound AI against one that feels genuinely useful required careful prompt engineering. The AI needs to acknowledge thin or missing evidence without becoming unhelpfully evasive.",
      },
      {
        title: "Data Representation",
        description:
          "Handling edge cases where users ask questions not well-represented in the dataset required careful consideration of how the AI should respond responsibly.",
      },
    ],
    tradeoffs: [
      {
        title: "Router vs. Strict Intent Planner",
        description:
          "The original strict intent classifier was replaced with a lightweight router that decides between direct answers and grounded lookups. This is far more flexible for natural queries, but requires the system to manage much richer data retrieval before a response is drafted.",
      },
      {
        title: "Richer Retrieval, More Complexity",
        description:
          "Feeding the AI individual review snippets, course aggregates, and tags gives it real grounding but makes the retrieval pipeline significantly more complex than the original thin-summary approach.",
      },
      {
        title: "Caution Over Confidence",
        description:
          "The AI is tuned to be explicit when evidence is thin or contradictory rather than filling gaps with inference. This prioritizes trust and accuracy at the cost of occasionally less decisive answers.",
      },
      {
        title: "Sourcing Data",
        description:
          "RateMyProfessors remains the primary data source due to its comprehensive coverage and user-generated reviews. This means the data may carry biases and may not always be current, which is a known tradeoff.",
      },
      {
        title: "Storing Data in JSON vs Database",
        description:
          "JSON was chosen for its simplicity and flexibility for this project's scale. While a database would offer more robust querying, JSON remains a lightweight solution that meets the application's current requirements.",
      },
    ],
    outcome: `
    The application has been deployed and was tested and used by students with positive feedback since they found it useful.
    The project provided valuable experience in AI integration, backend engineering, data engineering, and building user-centric applications.
    `,
  },
  {
    slug: "mps",
    colors: ["#2e3ffa", "#d70028"],
    image: "/mps.png",
    carouselImages: ["/mps-6.webp", "/mps-4.png", "/mps-7.webp", "/mps-3.png", "/mps-8.webp", "/mps-5.png"],
    problemItSolves: "There was a lack of fast-paced soccer games with realistic mechanics on Roblox at the time, and I wanted to create a fun and competitive soccer experience for players on the platform. I also wanted to build a community around the game where players could connect and compete with each other.",
    keyFeatures: [
      {
        title: "High Skill Ceiling",
        description: "Players have 5 tools, shoot, pass, long, tackle and dribble. Each tool has different actions when their respective key is pressed. There are around 25+ dribble combos, and more to be discovered.",
      },
      {
        title: "Successful Monetization",
        description: "RBLX games do generate revenue based on CCU and engagement time. This game alone has gained over six figures in net revenue across time.",
      },
      {
        title: "Community Building",
        description: "This game is an excellent way to meet new people and make new friends. I've created a community where over 160,000 players converse about the game in general, and host matches between each other.",
      },
    ],
    challenges: [
      {
        title: "Scaling for High Player Counts",
        description: "This was a small project I worked on in Sophomore year in high school, it unexpectedly gained attention from the soccer community and turned into a fan favorite. This also meant I had to optimize the game further, making it smoother for long-term gaming.",
      },
      {
        title: "Nature of Sports Games: Limited Updates",
        description: "Sports games often have limited opportunities for new content and updates, which can make it challenging to keep players engaged over time. This required careful planning and creativity to introduce meaningful updates that kept the game fresh and exciting.",
      },
      {
        title: "Staff Employment",
        description: "There was a need to grow the administration team when the player count grew and moderations for reports by users were needed. Initially, close friends accompanied me to help deal with moderations, but I eventually built it into a stable work enviornment.",
      },
    ],
    tradeoffs: [
      {
        title: "Solo Development vs Team",
        description: "The game started as a solo project, and I continued to develop it mostly on my own. While this allowed for a consistent vision and faster decision-making, it also meant that the development process was more time-consuming and limited in terms of expertise. As the game grew, I had to bring on staff to help with moderation and community management, but the core development remained solo.",
      },
      {
        title: "Monetization vs Player Experience",
        description: "I chose to monetize the game through various methods, such as microtransactions. While this generated significant revenue, I had to be careful to balance monetization with player experience to avoid making the game feel pay-to-win or alienating players who didn't want to spend money. I focused on creating a fair and enjoyable experience for all players while still offering optional purchases for those who wanted to support the game.",
      },
      {
        title: "Performance vs Visuals",
        description: "Soccer is played on a large field with many players, which can lead to performance issues, especially on lower-end devices. I had to make tradeoffs between visual fidelity and performance to ensure the game ran smoothly for a wide range of players. This involved optimizing assets, simplifying certain visual effects, and making design choices that prioritized gameplay performance while still maintaining an engaging visual style.",
      }
    ],
    outcome: `
    MPS has reached great heights, at times hitting around 500,000 monthly players and a few thousand concurrent users at peak hours.
    The revenue from it ended up paying for my university tuition, which is something I'm still grateful for.
    What mattered just as much was the community that formed around it.
    MPS became a starting point for a lot of the soccer titles that came after on Roblox, and seeing other developers build on the genre of soccer games was honestly one of the coolest parts of the whole experience.
    Working on the game taught me a lot, everything from gameplay design and scaling servers to handling feedback and managing a large player base.
    It was my first real exposure to building and maintaining a product that people around the world actually used, and it shaped a lot of how I approach projects today.
    `,
  },
  {
    slug: "uninext",
    colors: ["#3493ff", "#ffffff"],
    image: "/uninext-home.png",
    carouselImages: ["/uninext-home.png", "/uninext-dashboard.png", "/uninext-courses.png", "/uninext-planner.png"],
    keyFeatures: [
      {
        title: "Degree Progress Tracking",
        description: "Visualizes completed, in-progress, and planned courses against degree requirements, giving students a clear picture of where they stand.",
      },
      {
        title: "Term-Based Course Planner",
        description: "Organizes courses by academic term, allowing students to map out their full degree timeline semester by semester.",
      },
      {
        title: "GPA Calculator",
        description: "Tracks GPA in real time with support for multiple grading scales including standard 4.0, 4.3, and no plus/minus variants.",
      },
    ],
    challenges: [
      {
        title: "Degree Requirement Modeling",
        description: "Modeling the variety of degree structures across institutions, with nested requirement categories, credit thresholds, and elective flexibility, required careful data design to stay generic enough to be broadly useful.",
      },
    ],
    tradeoffs: [
      {
        title: "Frontend-First Approach",
        description: "I chose to build the full UI with placeholder data before introducing a backend. This let me validate the experience quickly, at the cost of deferring real persistence and multi-device sync to a later phase.",
      },
    ],
    outcome: `
    The application is currently on the Apple App Store.
    The project has deepened my experience in mobile UI design, academic data modeling, and building structured planning tools from the ground up.
    `,
  },
  {
    slug: "infinitecode",
    colors: ["#d1001c", "#ff1369"],
    image: "/ic-home.png",
    carouselImages: ["/ic-ql.png", "/ic-grading.png", "/ic-db.png", "/ic-ai-grade.png", "/ic-ai-gen.png", "/ic-ai-gen-home.png"],
    problemItSolves: "Practicing questions that appear in technical interviews is valuable. Platforms like LeetCode are great, I use it to learn common patterns, strengthen data structures and algorithms, and get comfortable with interview style problems. But interviews don't always give you something you've seen before. They test how you think, meaning they might not hand you a problem you've solved or memorized before.",
    keyFeatures: [
      {
        title: "Unprecedented Questions",
        description: "Uses AI to generate unique coding questions, providing endless practice opportunities for users.",
      },
      {
        title: "Custom Question Grader",
        description: "Users can input their own questions and solutions, and the AI will grade their code and provide feedback, making it a versatile tool for learning and improvement.",
      },
      {
        title: "Intuitive Code Editor",
        description: "Provides a user-friendly code editor with features like syntax highlighting.",
      },
      {
        title: "Multi Language Support",
        description: "Supports multiple programming languages such as Java, Python, and C++, allowing users to practice and improve their skills in various languages.",
      },
      {
        title: "Cloud Persistence",
        description: "Ensures that user progress and data are securely stored in the cloud, allowing for seamless access across devices and sessions.",
      },
    ],
    challenges: [
      {
        title: "Running Code",
        description: "Running user code in a secure and efficient way is a major challenge. I had to consider various approaches, such as using containerization with Docker or leveraging serverless functions, to execute code safely without risking the stability of the platform. Ultimately, I took assistance from AI to ensure safe execution.",
      },
      {
        title: "Grading Solutions",
        description: "Ensuring accurate grading of user solutions was a significant challenge. I initially considered using deterministic test cases, but the sheer variety of coding problems and potential edge cases made this approach impractical. Implementing AI for grading introduced complexity, such as handling hallucinations and ensuring reliable feedback, but it ultimately provided a more flexible and scalable solution.",
      },
    ],
    tradeoffs: [
      {
        title: "Sourcing Classic Problems",
        description: "I chose to source classic coding problems from public websites to provide users with familiar and well-known challenges. This approach allowed me to quickly build a robust problem set without having to create all the content from scratch. However, it also meant that I had to rely on the quality and variety of problems available on those platforms, which may not cover every topic or difficulty level comprehensively.",
      },
      {
        title: "AI Grading vs Deterministic Test Cases",
        description: "Choosing AI for grading solutions introduced complexity, such as handling hallucinations and ensuring reliable feedback, but it ultimately provided a more flexible and scalable solution compared to deterministic test cases.",
      },
      {
        title: "Running In-House vs Third-Party Services vs AI Assistance",
        description: "Deciding whether to run code in-house, use third-party services, or leverage AI assistance was a critical tradeoff. Each option had its pros and cons in terms of cost, scalability, and reliability. Ultimately, I chose the AI approach for the time being.",
      }
    ],
    outcome: `
    To be determined, the project is still in progress.
    `,
  },
  {
    slug: "resumexp",
    colors: ["#00ff8c", "#0ccaff"],
    image: "/rxp-home.png",
    carouselImages: ["/rxp-home.png", "/rxp-1.png", "/rxp-2.png", "/rxp-3.png", "/rxp-4.png", "/rxp-5.png", "/rxp-6.png"],
    problemItSolves: "Crafting a strong resume is crucial for job seekers, but it can be time consuming and challenging to know how to improve it effectively. Especially with all the ATS requirements and the need to tailor resumes for different job applications, it can be overwhelming for users to optimize their resumes and create compelling cover letters quickly.",
    bullets: [
      "Provides honest feedback on resumes to help users improve and stand out to potential employers.",
      "Offers a job match score feature that aligns resumes with job descriptions and suggests improvements.",
      "Generates personalized cover letters based on the user's resume for quick and efficient applications.",
    ],
    keyFeatures: [
      {
        title: "Honest Feedback",
        description: "Provides users with honest and constructive feedback on their resumes, helping them improve and stand out to potential employers.",
      },
      {
        title: "Job Match Score",
        description: "Lets users input a job description and receive a match score indicating how well their resume aligns with the job requirements, along with suggestions for improvement.",
      },
      {
        title: "Cover Letter Generation",
        description: "Generates personalized cover letters based on the user's resume, helping users create compelling applications quickly and efficiently.",
      },
    ],
    challenges: [
      {
        title: "ATS Compliance",
        description: "Knowing how Applicant Tracking Systems (ATS) work and ensuring the AI provides suggestions that help resumes pass these systems was a significant challenge. Research and prompt engineering were required to achieve this.",
      },
    ],
    tradeoffs: [
      {
        title: "AI Model Selection",
        description: "I chose AI models that balance performance, accuracy, and cost. Extensive testing and evaluation were conducted to select the most suitable model for the application's needs.",
      },
    ],
    outcome: `
    The application was deployed and has been used by friends in my university to give insights on their resumes, and the feedback has been positive so far.
    The project gave valuable experience in AI integration, data analysis, and building user-centric applications.
    The source code is available on GitHub for anyone interested in exploring or contributing to the project.
    `,
  },
  {
    slug: "scentdex",
    colors: ["#ff34b1", "#ff851b"],
    image: "/sd-home.png",
    carouselImages: ["/sd-home.png", "/sd-1.png", "/sd-2.png", "/sd-3.png"],
    keyFeatures: [
      {
        title: "Advanced Filtering System",
        description: "Features remarkable filters based on distinct features such as seasons, gender and much more.",
      },
      {
        title: "Detailed Fragrance Profiles",
        description: "Provides in-depth information on each fragrance, including ideal wear times and scent notes.",
      },
      {
        title: "Artificial Intelligence Integration",
        description: "Integrates AI to provide personalized fragrance recommendations and insights based on user preferences.",
      },
    ],
    challenges: [
      {
        title: "Fragrance Research",
        description: "I've only been really into fragrances since around 2023, when the trendiness was just starting to peak. I had decent knowledge on fragrances, but of course you can never know enough. I had to do extensive research on various fragrance notes to curate a decent dataset for the project.",
      }
    ],
    tradeoffs: [
      {
        title: "Data Sourcing",
        description: "I chose to source data from Fragella, a reputable fragrance database, to ensure the accuracy and reliability of the information presented. Limited quantity, but high quality.",
      }
    ],
    outcome: `
    The website has been deployed and is open source on GitHub.
    The project provided valuable experience in front-end development, handling large datasets, and building user-friendly interfaces.
    `,
  }
];

const rawBlogs: RawBlog[] = [
  // {
  // slug: "uninext",
  // image: "/uninext-home.png",
  // blogPosts: []
  // },
  {
    slug: "engba",
    image: "/engba-home.jpg",
    blogPosts: [
      {
        date: "April 22, 2026",
        title: "Nostalgia",
        borderColor: "#00ffea",
        content: [
          {
            type: "paragraph",
            content: `
            Tomodachi Life: Living the Dream recently released and I've been seeing everyone play it.
            It brought back so many memories of playing the original Tomodachi Life on the Nintendo 3DS back in the day.
            `,
          },
          {
            type: "paragraph",
            content: `
            Revisiting that nostalgia made me remember that I was also curious about how these games worked.
            I've never used a Game Boy Advance, but how does a system as limited as the GBA handle everything from sprite rendering to input to game logic so seamlessly?
            What's really happening behind the scenes when a game feels this responsive and alive?
            `,
          },
          {
            type: "paragraph",
            content: `
            Even besides that, how is it possible that something that isn't a GBA can run GBA games at all?
            `,
          },
          {
            type: "paragraph",
            content: `
            After doing some research, most of the concepts behind how emulators work were familiar to me.
            Memory management, hardware interrupts, I/O & DMA, and much more were all concepts I had learned recently while studying computer architecture and operating systems.
            `,
          },
          {
            type: "paragraph",
            content: `
            So, that was enough for me to decide to build the GBA emulator, it'll be fun of course, but challenging enough to keep me learning and engaged for a while, and I can document the process along the way.
            `,
          }
        ],
      },
      {
        date: "April 22, 2026",
        title: "Skeleton",
        borderColor: "#353cff",
        content: [
          {
            type: "paragraph",
            content: `
            I started coding the emulator by setting up the part that everything else depends on per the architecture, memory.
            `
          },
          {
            type: "paragraph",
            content: `
            The GBA has a pretty strict memory layout, so I built a Bus class that knows how to route reads and writes to the right place.
            The CPU doesn't care about “RAM” or “ROM”, it just throws addresses around, so the Bus has to translate those into actual storage.
            `
          },
          {
            type: "paragraph",
            content: `
            I added the main regions I need for now:
            `
          },
          {
            type: "bulletpoints",
            content: ["External RAM", "Internal RAM", "Game Cartridge"]
          },
          {
            type: "paragraph",
            content: `
            Each one is just a vector of bytes, but the Bus handles the offsets and boundaries.
            It already feels like a real system once you can load a ROM file into memory and read from it.
            `
          },
          {
            type: "paragraph",
            content: `
            After that, I set up the CPU state.
            All the registers, the CPSR, and the starting PC at 0x08000000.
            The CPU can step, even though the step function barely does anything yet.
            But the structure is there.
            `
          },
          {
            type: "paragraph",
            content: `
            From there, I wired everything together in main.cpp.
            It loads the ROM, initializes the Bus and CPU, and runs a loop that calls cpu.step() a bunch of times.
            I also added a basic PPU stub with a 240x160 framebuffer, plus a small SDL2 window layer so I can actually see something on screen.
            `
          },
          {
            type: "paragraph",
            content: `
            Right now the PPU isn't rendering tiles or sprites.
            Instead, I'm filling the framebuffer with a simple color gradient each frame just to confirm the loop, timing, and window are all working.
            It's the first time EnGBA has produced any kind of visual output, even if it's just a shifting pattern.
            `
          },
          {
            type: "paragraph",
            content: `
            It's not a real emulator yet, but it's a skeleton that boots, ticks forward, and draws pixels.
            That's enough to move on to the fun part next: implementing data processing instructions.
            `
          },
          {
            type: "image",
            content: ["/engba-1.png"],
          },
          {
            type: "paragraph",
            content: `
            Tiny demo of the pattern after running:
            `
          },
          {
            type: "code",
            content: [
              "cd EnGBA",
              "mkdir -p build && cd build",
              "cmake ..",
              "make",
              "./EnGBA <my-rom-path>"
            ]
          },
        ],
      },
      {
        date: "April 23, 2026",
        title: "Instructions",
        borderColor: "#ffbf1c",
        content: [
          {
            type: "paragraph",
            content: `
            The GBA's CPU is an ARM7TDMI, which means it can run instruction sets ARM (32-bit) and THUMB (16-bit).
            I started with ARM since most of the boot sequence uses it.
            `
          },
          {
            type: "paragraph",
            content: `
            Data processing instructions are the core of the CPU.
            MOV, ADD, SUB, AND, ORR, all the basic operations that every program relies on.
            I spent today implementing the decoder and executor for these.
            `
          },
          {
            type: "paragraph",
            content: `
            The tricky part is handling all the condition codes and flags.
            ARM instructions can execute conditionally based on CPSR flags, so I had to write a function that checks if an instruction should actually run.
            Then there's the barrel shifter that can apply shifts or rotates to operands before the operation happens.
            `
          },
          {
            type: "paragraph",
            content: `
            I added support for the main operations:
            `
          },
          {
            type: "bulletpoints",
            content: ["MOV and MVN", "ADD, ADC, SUB, and RSB", "AND, ORR, EOR, and BIC", "CMP, CMN, TST, and TEQ"]
          },
          {
            type: "paragraph",
            content: `
            Each one updates flags when needed, handles the shifter operand, and writes results back to the correct register.
            I wrote a few test cases to verify MOV and ADD were working, but the real test will be when I load an actual ROM.
            `
          },
          {
            type: "paragraph",
            content: `
            Tomorrow I'll try to tackle branches and memory instructions so the CPU can actually jump around and load data.
            `
          }
        ],
      },
      {
        date: "April 24, 2026",
        title: "Branching",
        borderColor: "#ff24af",
        content: [
          {
            type: "paragraph",
            content: `
            Today was all about control flow.
            Without branch instructions, the CPU just marches forward linearly through memory, which isn't useful for running real code.
            `
          },
          {
            type: "paragraph",
            content: `
            I implemented B and BL (branch and branch with link).
            B just changes the program counter to jump somewhere else.
            BL does the same thing but also saves the return address in the link register (R14), which is how function calls work.
            `
          },
          {
            type: "paragraph",
            content: `
            The offset is encoded in the instruction as a signed 24-bit value, and you have to shift it left by 2 and sign-extend it to get the actual jump distance.
            I got the math wrong the first time and the CPU started jumping to garbage addresses, but after fixing the sign extension it worked.
            `
          },
          {
            type: "paragraph",
            content: `
            I also added BX (branch and exchange), which lets the CPU switch between ARM and THUMB mode.
            The GBA uses THUMB mode for code density, so this instruction is essential.
            When the lowest bit of target address is 1, the CPU switches to THUMB mode.
            `
          },
          {
            type: "paragraph",
            content: `
            After that, I started on load and store instructions.
            LDR and STR for single words, LDRB and STRB for bytes, LDRH and STRH for halfwords.
            These are what let the CPU actually read and write memory through the Bus.
            `
          },
          {
            type: "paragraph",
            content: `
            I haven't tested everything yet, but the structure is in place.
            Tomorrow I'll try to implement the THUMB instruction set so the emulator can handle both modes.
            `
          }
        ],
      },
      {
        date: "April 25, 2026",
        title: "THUMB",
        borderColor: "#6fff21",
        content: [
          {
            type: "paragraph",
            content: `
            THUMB instructions are 16 bits instead of 32, which makes them more compact but also more restrictive.
            They can only access the lower 8 registers (R0-R7) in most cases, and they don't have conditional execution like ARM instructions do.
            `
          },
          {
            type: "paragraph",
            content: `
            I added a separate decoder for THUMB mode.
            It checks the CPSR's T bit to figure out which mode the CPU is in, then decodes accordingly.
            `
          },
          {
            type: "paragraph",
            content: `
            THUMB has its own versions of the data processing instructions, but they're simpler.
            ADD, SUB, MOV, CMP, and all the logical operations are there, just with less flexibility.
            Branch instructions in THUMB are similar to ARM, but with shorter offsets.
            `
          },
          {
            type: "paragraph",
            content: `
            The annoying part was handling the different instruction formats.
            THUMB has like freaking 19 different formats, and each one encodes operands differently.
            Some use 3-bit register fields, some use 8-bit immediates, some use offsets.
            I spent most of the day making sure I was extracting the right bits for each format.
            `
          },
          {
            type: "paragraph",
            content: `
            By the end of the day, I had most of THUMB working.
            I tested it with a few handwritten instruction sequences and confirmed that mode switching was happening correctly.
            `
          },
          {
            type: "paragraph",
            content: `
            Tomorrow I may finally work on the PPU so I can see something more than a gradient on screen.
            `
          }
        ],
      },
      {
        date: "April 26, 2026",
        title: "Rendering",
        borderColor: "#1a89ff",
        content: [
          {
            type: "paragraph",
            content: `
            The PPU (Picture Processing Unit) is what turns memory into pixels.
            The GBA's PPU supports multiple background layers, sprites, and different graphics modes.
            I had to reference mGBA because they had perfected the timing and rendering details, which are pretty complex.
            Today I focused on getting Mode 3 working, which is the simplest: just a 240x160 bitmap in VRAM.
            `
          },
          {
            type: "paragraph",
            content: `
            First, I had to map VRAM correctly in the Bus.
            VRAM starts at 0x06000000 and is 96KB.
            In Mode 3, the framebuffer is stored as 16-bit RGB values (5 bits per channel), so I updated the PPU to read from VRAM and convert those values to 32-bit RGBA for SDL.
            `
          },
          {
            type: "paragraph",
            content: `
            Then I had to implement the LCD control register (DISPCNT) at 0x04000000.
            This register tells the PPU which mode to use, which layers are enabled, and other display settings.
            I added code to read this register and adjust rendering behavior accordingly.
            `
          },
          {
            type: "paragraph",
            content: `
            After that, I updated the main loop to call the PPU at the right time.
            The GBA renders at 60 FPS, with 160 visible scanlines and 68 for VBlank.
            I added basic timing so the PPU renders one scanline at a time and triggers VBlank at the right moment.
            `
          },
          {
            type: "paragraph",
            content: `
            I tested it by loading a ROM that uses Mode 3, and for the first time, I saw actual graphics on screen.
            They were glitchy and flickering, but they were there.
            The colors were right, the resolution was right, and it was clearly rendering something intentional.
            `
          },
          {
            type: "paragraph",
            content: `
            Tomorrow I'll work on cleaning up the timing and implementing interrupts so the CPU can sync with the display properly.
            `
          }
        ],
      },
      {
        date: "April 27, 2026",
        title: "Timing",
        borderColor: "#fff200",
        content: [
          {
            type: "paragraph",
            content: `
            The CPU and PPU need to stay in sync, and that requires proper timing.
            The GBA's CPU runs at 16.78 MHz, and the PPU renders at 60 Hz.
            If the CPU runs too fast or too slow, everything breaks.
            `
          },
          {
            type: "paragraph",
            content: `
            I added cycle counting to the CPU.
            Each instruction now tracks how many cycles it took to execute, and the main loop uses that to throttle the emulation.
            Different instructions take different amounts of time.
            Memory access is slower than register operations, for example.
            `
          },
          {
            type: "paragraph",
            content: `
            Then I implemented basic interrupt support.
            The GBA uses interrupts for VBlank, HBlank, timers, and other events.
            I added the interrupt registers (IE, IF, IME) and wired them into the CPU so it can jump to the interrupt handler when an interrupt fires.
            `
          },
          {
            type: "paragraph",
            content: `
            The VBlank interrupt is the most important one for games so to speak.
            It fires every 1/60th of a second, right after the visible scanlines finish rendering.
            Games use this to update graphics and logic without tearing.
            `
          },
          {
            type: "paragraph",
            content: `
            After getting interrupts working, the glitchy flickering from yesterday went away.
            The ROM I was testing now renders smoothly, and the frame rate is stable.
            It's still not perfect, some graphics are missing, and there's no audio.
            But it's starting to look like a real C++ GBA emulator.
            `
          },
          {
            type: "paragraph",
            content: `
            I also spent some time debugging why certain instructions weren't working.
            Turns out I had a bug in my barrel shifter implementation that was corrupting operands in some cases.
            Fixed that and a few other small issues.
            `
          }
        ],
      },
      {
        date: "April 28, 2026",
        title: "Reflection",
        borderColor: "#04e800",
        content: [
          {
            type: "paragraph",
            content: `
            It's been around a week since I started EnGBA, and it's wild how much progress happened in such a short time.
            `
          },
          {
            type: "paragraph",
            content: `
            The core is solid now.
            The CPU handles ARM and THUMB instructions, branches, memory access, and interrupts.
            The PPU can render Mode 3 graphics at 60 FPS.
            The timing is accurate enough that things don't break immediately.
            `
          },
          {
            type: "paragraph",
            content: `
            But there's some stuff missing.
            `
          },
          {
            type: "paragraph",
            content: `
            Next I should probably focus on building out the user-facing features.
            Things like customizable controls, audio volume settings, and visual options (filters, scaling, etc.).
            `
          },
          {
            type: "paragraph",
            content: `
            I'm thinking of adding a simple settings menu that lets you:
            `
          },
          {
            type: "bulletpoints",
            content: ["Remap controls", "Adjust audio volume and sample rate", "Choose display filters and scaling modes", "Configure save file locations"]
          },
          {
            type: "paragraph",
            content: `
            It'll probably take a while to get all of that working, but it feels like the right next step.
            The emulator is functional, but it needs polish to be used seriously.
            `
          },
          {
            type: "paragraph",
            content: `
            For now, I'm happy with where things are.
            I learned a ton, and I can't wait for more.
            `
          },
          {
            type: "image",
            content: ["/engba-gameplay.jpeg"],
            scale: 0.25
          },
          {
            type: "paragraph",
            content: `
            Friends trying out EnGBA for the first time and playing Super Mario Advance 2.
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            We literally couldn't get passed the second level..
            `
          }
        ],
      }
    ]
  },
  {
    slug: "infinitecode",
    image: "/ic-home.png",
    blogPosts: [
      {
        date: "February 8, 2026 - 6:16PM",
        title: "Infinite",
        borderColor: "#eb0f13",
        content: [
          {
            type: "paragraph",
            content: `
            I'm starting a new project called InfiniteCode, a coding practice platform built around maximizing problem-solving skills.
            `,
          },
          {
            type: "paragraph",
            content: `
            Practicing questions that appear in technical interviews is valuable. 
            Platforms like LeetCode are great, I use it to learn common patterns, strengthen data structures and algorithms, and get comfortable with interview style problems. 
            But interviews don't always give you something you've seen before.
            They test how you think, meaning they might not hand you a problem you've solved or memorized before.
            `,
          },
          {
            type: "paragraph",
            content: `
            InfiniteCode is built around the idea of adaptability.
            Alongside classic challenges, the platform will generate new problems using AI so you're constantly solving things you haven't seen before.
            The goal is to build this adaptability and confidence when facing unfamiliar questions, not just recognition of known ones.
            `,
          },
          {
            type: "paragraph",
            content: `
            I hope to take longer on this project, since it is more ambitious than my previous projects. 
            I'll be documenting the architecture, decisions, and progress as it comes together.
            `,
          }
        ],
      },
      {
        date: "February 10, 2026 - 11:53PM",
        title: "Architecture",
        borderColor: "#ffb12b",
        content: [
          {
            type: "paragraph",
            content: `
            The mission is quite simple: prepare users for the unexpected in coding interviews.
            But for that, InfiniteCode needs a clean editor, clear problems, and fast feedback.
            I'm keeping the architecture minimal on purpose for now so I can move efficiently and iterate without over-engineering.
            `,
          },
          {
            type: "paragraph",
            content: `
            The core UI should use a split layout like LeetCode, NeetCode, etc.
            Question on the left, code editor and output on the right.
            Of course, the well known splitter component should be used to resize panels.
            It's a familiar layout that would reduce the learning curve for users.
            I am choosing Monaco for the editor because it feels like Visual Studio Code and looks to already support syntax highlighting and language tooling.
            It's heavier than a basic textarea and less customizable, but worth it for user experience.
            Besides, I don't think most users would want a highly customized editor for a coding practice platform, so the tradeoff is reasonable.
            Check out Monaco here:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: "https://www.npmjs.com/package/@monaco-editor/react",
            link: "https://www.npmjs.com/package/@monaco-editor/react",
          },
          {
            type: "paragraph",
            content: `
            I'll use OpenRouter SDK, still haven't decided on the AI model.
            The AI pipeline will have to handle problem generation and solution grading.
            Python retrieves classic problems from some public websites, but there's no way to really grade these problems without an AI.
            You'd need a lot of test cases for each problem to reliably grade them, and even then, there are edge cases that could slip through.
            I may not need an AI to grade solutions, but I haven't found a way to reliably test and grade code without it yet.
            But grading should be lightweight to avoid overwhelming users while still giving reasonable feedback.
            A simple prompt would suffice to check if the user's solution to the problem is correct, and maybe provide some hints if it's not.
            `,
          },
          {
            type: "paragraph",
            content: `
            Planning wise, I'm prioritizing a stable experience before adding more complexity like user accounts or rankings.
            Yes, social features will have to wait, it will help me nail the core loop first, which is: read -> solve -> test -> learn.
            I think this is the most important part to get right, and I can always build around it later.
            Overview:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Stack: Next.js + React, Typescript, Monaco editor, OpenRouter, Python for classic problem retrieval",
              "Future Stack: PostgreSQL & Supabase for user data and storage, I want to explore Supabase for this project since I haven't used it before and it seems interesting",
              "UI: shadcn, mvp: split view (question on left, editor + console on right)",
              "Considerations: Limited functionality for Monaco but better user experience, AI used to grade solutions",
              "Focus: Core loop first, extras (accounts, leaderboards) later"
            ],
          }
        ]
      },
      {
        date: "February 12, 2026 - 11:01PM",
        title: "Assessment",
        borderColor: "#0fdc8a",
        content: [
          {
            type: "paragraph",
            content: `
            While working on the grading pipeline for InfiniteCode, I've realized how powerful using AI to grade can be.
            I initially thought I could get away with just running the user's code against a set of test cases, but that approach has some major limitations.
            `,
          },
          {
            type: "paragraph",
            content: `
            The sheer size of the database of coding problems and their edge cases makes it impractical to maintain exhaustive test cases for every problem, especially as the database grows.
            Even if I did, there are always edge cases that could slip through, and users would be left wondering why their solution was marked wrong.
            With AI grading layered on top of deterministic test execution, there's more flexibility.
            For example, I made it so that the AI helps evaluate the solution and also provides some cases where the solution fails or succeeds, based on the results from actual test runs.
            One to three cases, just to give users a better understanding of where their solution stands and how it can be improved.          
            `,
          },
          {
            type: "paragraph",
            content: `
            Using AI also allows for more refined feedback.
            Instead of just marking a solution as right or wrong, the AI can provide hints, suggest optimizations, or even point out specific lines of code that could be improved.
            Some platforms are beginning to explore AI-assisted feedback, but I think concrete example cases alongside that feedback could really enhance the learning experience for users.
            `,
          },
          {
            type: "paragraph",
            content: `
            Of course, there are drawbacks to using AI for grading.
            AI models can hallucinate, and this isn't new information.
            Just relying on AI for grading could lead to inaccurate feedback if the model isn't properly constrained or if it encounters a problem it doesn't understand well.
            To mitigate this, I will have to implement strong filtering and constraints in the backend, such as structured prompts, validation against real test results, and output filtering to ensure the AI's responses are as accurate and helpful as possible.
            `,
          },
          {
            type: "paragraph",
            content: `
            All in all, while using AI for grading introduces some complexity and potential downsides, I believe the benefits in terms of flexibility, refined feedback, and scalability outweigh the drawbacks when implemented thoughtfully.
            `,
          },
          {
            type: "image",
            content: ["/ic-grading.png"],
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            Green checks give me dopamine..
            `,
          },
        ]
      },
      {
        date: "February 22, 2026 - 1:01AM",
        title: "Versatility",
        borderColor: "#124dff",
        content: [
          {
            type: "paragraph",
            content: `
            It's been a while.
            I've been busy with University and career development, but I've been making progress on InfiniteCode in my free time.
            `,
          },
          {
            type: "paragraph",
            content: `
            So looking back, it looks like I left off talking about the grading aspect of the app, choosing AI for grading after weighing the tradeoffs.
            But I'm still realizing how powerful AI can be used in this platform.
            It has allowed me to add more versatility to the platform, which has opened up more use cases beyond just practicing interview questions.
            `,
          },
          {
            type: "paragraph",
            content: `
            For example, I've worked on adding a feature where users can grade their coding assignments.
            This is a common use case for students who want to get feedback on their code before submitting it officially.
            A student would just input their code into the built in code editor, and what that code is supposed to do, and the AI would handle it from there.
            It's especially good if the student feels they missed some test cases, or if they just want some feedback on how to optimize their code.
            An AI should tell you where your code is failing and give you some hints on how to fix it, which would be really useful for learning and improving coding skills.
            `,
          },
          {
            type: "image",
            content: ["/ic-ai-grade.png"],
          },
          {
            type: "image",
            content: ["/ic-ai-gen.png"],
          },
          {
            type: "paragraph",
            content: `
            Finished up the AI question generation feature as well.
            Solving those questions is a fun experience, and it's interesting to see the variety of questions it can come up with.
            `,
          },
        ]
      },
      {
        date: "March 8, 2026 - 1:19AM",
        title: "Persistence I",
        borderColor: "#0079cf",
        content: [
          {
            type: "paragraph",
            content: `
            I've been looking forward to this part of the development, which involves moving from in-memory state to real persistence.
            Until now, features functioned correctly in the UI, but data wasn't persisted when the page was closed.
            Supabase changed that, tt gave me storage, auth, and a PostgreSQL backend in one place, so I could focus more on product behavior and less on wiring up infrastructure from scratch.
            `,
          },
          {
            type: "paragraph",
            content: `
            I had a bit of prior experience with PostgreSQL, but Supabase was new for me.
            The learning curve was honestly smooth.
            The dashboard made it easy to inspect tables, test queries, and verify data while building.
            For this project, relational structure matters.
            Users, generated questions, and saved question records all map naturally to Postgres tables, and that made the data model feel clean and predictable.
            `,
          },
          {
            type: "paragraph",
            content: `
            Authentication was the next step.
            Once auth was in place, features became user-specific in a meaningful way.
            A signed-in user can save generated questions and come back later to load them, while anonymous users still get the core experience but without persistence.
            That line between “try it” and “personal workspace” is small in code, but huge in UX.
            `,
          },
          {
            type: "paragraph",
            content: `
            One detail I cared about was data safety in the UI flow.
            If a user is about to load another saved question or click “New Question” while their current generated question hasn't been saved, the app now warns them first.
            It sounds simple, but these guardrails matter.
            They prevent accidental data loss and make the app feel reliable instead of fragile.
            `,
          },
          {
            type: "paragraph",
            content: `
            Overall, this stage made the app feel real.
            Persistence, authentication, and a structured database turned temporary interactions into durable user progress.
            There's still plenty to build, but this foundation is solid.
            `,
          },
          {
            type: "image",
            content: ["/ic-db.png"],
          },
        ]
      },
      {
        date: "March 10, 2026 - 2:04AM",
        title: "Persistence II",
        borderColor: "#01548f",
        content: [
          {
            type: "paragraph",
            content: `
            On the last blog post, I focused on saving AI generated questions with Supabase and PostgreSQL.
            Storing the problem itself solved one half of the problem.
            But while using the app, I noticed the bigger pain point was actually user progress.
            People switch tabs, refresh, change language, or come back later.
            If their code disappears, trust disappears too.
            So recently I focused on saving editor code drafts and tracking completed questions in a way that feels fast for users but still clean and affordable on the backend.
            `,
          },
          {
            type: "paragraph",
            content: `
            My first decision was local draft saving.
            I added autosave to localStorage with a debounce, keyed by user + question + language + variant.
            That means a Python draft for Question A does not overwrite a Java draft for Question A, and neither affects Question B.
            Local save is instant and free, so it gives a great UX baseline.
            Then I layered cloud persistence with Supabase for authenticated users.
            I only sync remotely when it matters (manual save, run/submit/grade, periodic dirty sync), not every keystroke.
            This reduces write volume and avoids turning autosave into a cost problem.
            `,
          },
          {
            type: "paragraph",
            content: `
            I had to make tradeoffs around consistency vs cost.
            Full real-time sync on every edit sounds nice, but it is expensive and noisy.
            So I used hash based checks to skip unchanged saves and added cooldown/rate limiting on manual draft saves.
            I also introduced conflict resolution between local and remote drafts using updated timestamps, choosing the newer draft as source of truth on load.
            For a single user coding workflow, this is simple, reliable, and easy.
            In short, I optimize for practical durability, not theoretical perfection.
            `,
          },
          {
            type: "paragraph",
            content: `
            The second feature was completion tracking after successful submit.
            I created a completed questions table and marked questions as completed only after a valid submission event, not on run/simulate.
            This avoids false positives and keeps progress meaningful.
            For generated AI questions, I used stable question keys (content based hashing fallback) so progress and drafts still map correctly even when IDs are temporary.
            The result is a smoother loop: solve -> submit -> completion recorded -> progress reflected in UI.
            This also sets up future features like streaks and personalized recommendations.
            `,
          },
          {
            type: "paragraph",
            content: `
            All in all, I was working less on adding flashy features and more on product reliability.
            My core principle was “save often locally, sync smartly remotely”.
            That gave me a strong UX, lower backend cost, and cleaner data semantics for progress tracking.
            `,
          },
          {
            type: "image",
            content: ["/ic-ql.png"],
          }
        ]
      },
      {
        date: "March 29, 2026 - 5:14PM",
        title: "Live",
        borderColor: "#ffffff",
        content: [
          {
            type: "paragraph",
            content: `
            InfiniteCode is now live!
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            https://infinitecodex.xyz
            `,
            link: "https://infinitecodex.xyz",
          },
          {
            type: "paragraph",
            content: `
            After a few months of development, the core experience is ready for users.
            I'm happy with how the core loop turned out, and I think the AI grading and generation features add a lot of value and versatility to the platform.
            `,
          },
          {
            type: "paragraph",
            content: `
            This is just the beginning, there are plenty of features and improvements I want to add, but I'm excited to share it in its current state.
            The database of classic problems will grow, and the AI grading and generation will continue to be refined based on user feedback and my own observations. 
            `,
          },
          {
            type: "image",
            content: ["/ifc-med-ai.png"],
          }
        ]
      }
    ]
  },
  {
    slug: "ramai",
    image: "/ramai-home.png",
    blogPosts: [
      {
        date: "January 15, 2026",
        title: "Inception",
        borderColor: "#1aca75",
        content: [
          {
            type: "paragraph",
            content: `
            Actually, this is the start of the blog for this project.
            I started planning the actual project a few days ago. 
            I suppose the reason for starting this app in particular was because I was interested in creating my first AI integrated application.
            But I also wanted something that Suffolk University students could potentially use.
            `,
          },
          {
            type: "paragraph",
            content: `
            Right now, I've already started building the app, after a day or two of planning the architecture and determining the tech stack.
            I've always had the bad habit of creating the name and logo of applications early, but wow, that part is really fun.
            `,
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            But enough of that, here's what I've done so far:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Prototype AI chatbot. I've decided to use XiaomiMiMo's MiMo-V2-Flash. I like this model because it's quite fast despite being inexpensive. But also because anything above this is overkill for this project.",
              "Discover page, along with the search bar feature, which is the main component of the page. You can search for professors by their name, and it also has a filters button with department filters such as Computer Science, Mathematics, and Business.",
              "Professor profile page, which displays the professor's information such as their name, department, average rating, and recent reviews from students.",
            ],
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            I'll continue working on this in my free time, and I'll post updates here as I make more progress.
            `,
            marginBottom: 2
          },
        ],
      },
      {
        date: "January 16, 2026",
        title: "Motive",
        borderColor: "#553adc",
        content: [
          {
            type: "paragraph",
            content: `
            One of my friends told me this project didn't make sense to create because Google's AI search results or ChatGPT "does the same thing and better.”
            I agreed, they had a point, but I also had one:
            `,
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            The existence of similar projects by billion dollar companies shouldn't deter you from working on your own.
            The goal, or my goal at least, isn't to compete with them.
            It's to learn, build, and ultimately have fun in my free time because it's been my passion to do so.
            It's the kind of mentality that I have when planning and building all of my projects, and it's what has allowed me to actually enjoy working on them and not get demotivated by the fact that there are similar projects out there.
            `,
          },
          {
            type: "paragraph",
            content: `
            For me, this project was always about growing as a software developer & engineer.
            Designing a system, integrating AI and working with real data, while also creating a general usage for students.
            And honestly, if even one person uses and benefits from it, that's good enough for me.
            Every project teaches you something, and for me, that's far more valuable than trying to measure yourself against tech giants.
            `,
          }
        ],
      },
      {
        date: "January 17, 2026",
        title: "Audit",
        borderColor: "#ff1285",
        content: [
          {
            type: "paragraph",
            content: `
            This border color is nice.. anyways, lately I've been auditing my AI's backend instead of adding new features.
            I decided to halt feature work because I know that accuracy and trust matter a lot when it comes to RamAI's chatbot.
            If the AI gives messy information or is unable to respond to certain questions, users will quickly lose trust and stop using it.
            `,
          },
          {
            type: "paragraph",
            content: `
            I have an opinion that you may or may not agree with: an AI that confidently says incorrect stuff is worse than one that says "I don't know".
            `,
          },
          {
            type: "paragraph",
            content: `
            So, I researched and came up with questions that real users would realistically ask the chatbot.
            Then I asked those questions, recorded the responses, and analyzed them alongside a rating based on how well the AI responded.
            I wanted to see where the system actually breaks under real questions.
            `,
          },
          {
            type: "paragraph",
            content: `
            What surprised me most is how good the AI responded to many of the questions when the intent was clear.
            It's surreal to witness something you created work in a way like this.
            You honestly have to experience it if you haven't.
            `,
          },
          {
            type: "paragraph",
            content: `
            Of course, it wasn't all perfect.
            There were small bugs, like case sensitivity and prompt boundary issues, that caused some big perception problems.
            I also noticed I was asking the AI questions that aren't really represented in the data, and I'm still not sure how I want to handle those yet.
            There were also weird bracket artifacts leaking into responses, along with a JSON/syntax error tied to a specific (or maybe unspecific) intent.
            One response in particular was amusing to me, where the AI tried to be safe and helpful at the same time, then ended up contradicting itself.
            You can find that response at the end of this blog post in the promptAccuracy.md file, question 5, where I asked about student reviews on a professor.
            `,
          },
          {
            type: "paragraph",
            content: `
            Overall, there are strong protections against AI hallucinations in the backend.
            Department scoping is mostly working as intended.
            My ranking logic is producing genuinely useful results.
            Auditing all of this has also made debugging way easier than blindly guessing what to fix.
            `,
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            If you're looking to build a similiar AI system, let half the work be done by the prompt engineering for the planner and answer.
            The backend filters and constraints do the rest, based on the intents from the planner.
            `,
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            Below are the audit files in markdown which contain stuff like questions asked to the AI, notes and detailed analyses.
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            promptAccuracy.md
            `,
            link: "https://drive.google.com/file/d/1sVkUzfep1-FFfIDjQXQkW4monR5i5TO3/view?usp=drive_link",
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            promptAccuracyFollowUp.md
            `,
            link: "https://drive.google.com/file/d/15gJhxOkPVPc-JQceWjUJw0fEup5Wi218/view?usp=drive_link",
            marginBottom: 2
          },
        ]
      },
      {
        date: "January 20, 2026",
        title: "Reflection",
        borderColor: "#ffffff",
        content: [
          {
            type: "paragraph",
            content: `
            It's been a few days since my last post.
            Reason being is that I was wrapping the project up.
            Working on this has taught me a lot about building AI-integrated applications, with this project acting as the catalyst.
            From designing the architecture and UI layout, to backend filtering, auditing, and refining the AI's responses, each step ended up being a meaningful learning experience.
            It just made me realize how complex the actual AI apps we use daily are.
            `,
          },
          {
            type: "paragraph",
            content: `
            I also had a few friends try out the app.
            They liked it and said they genuinely found it useful.
            That feedback mattered more than I expected, because it helped me see the project from a user's perspective instead of just my own as the builder.
            `,
          },
          {
            type: "paragraph",
            content: `
            What stood out to me the most is how much trust and accuracy matter when working with AI. 
            It's easy to make something that looks smart, but much harder to build something that users can actually rely on, which I'm still trying to achieve. 
            That shift in mentality is something I'll carry forward.
            `,
          },
          {
            type: "paragraph",
            content: `
            I'm stepping away from active development of major features for now.
            I'll focus on maintenance and polishing it here and there instead. 
            It's not because there's nothing left to improve, but I feel like this is a good stopping point. 
            The system works, I've learned lessons, and I'm happy with what is is right now.`,
          },
          {
            type: "paragraph",
            content: `
            The live demo for the project is public if you're interested in checking it out.
            The UI is different because I migrated from React Native to a web app, which gave me more flexibility and easier deployment.
            `,
          },
          {
            type: "paragraph",
            content: `
            Visit it here:
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `https://ram-ai.xyz/`,
            link: "https://ram-ai.xyz/",
            marginBottom: 1
          }
        ]
      },
      {
        date: "April 16, 2026 - 11:03PM",
        title: "Return",
        borderColor: "#07ffb9",
        content: [
          {
            type: "paragraph",
            content: `
            It's been a few months since I touched RamAI.
            When I jumped back in to audit the performance, I realized the original architecture was just too stiff.
            I'd built it around heavy intent classification and narrow pipelines, which worked fine for simple recommendations but completely fell apart as soon as a student asked something natural or messy.
            I had to admit that the structure was actually making the AI narrow by forcing it into a box.
            `,
          },
          {
            type: "paragraph",
            content: `
            The biggest wakeup call was realizing that searching for a professor and reasoning about one are two different things.
            The old system felt like a rigid filter.
            It could find a "low stress math teacher" easily but it would choke on simple questions like "Is Xinxin Jiang good?".
            I was forcing every query through a tiny straw before the model even had a chance to think.
            `,
          },
          {
            type: "paragraph",
            content: `
            I ended up scrapping the strict planner and moving toward an evidence first setup.
            Now, instead of thin summaries, the AI digs directly into the JSON, pulling from raw review snippets, tags, and course metrics all at once.
            The rule is simple, if the data is in the JSON, the AI should be able to find it, no more guessing.
            `,
          },
          {
            type: "paragraph",
            content: `
            Getting there wasn't exactly smooth.
            I spent a lot of time fighting context bleeding where the AI would remember a department or trait from three questions ago and accidentally use it to block a perfectly valid match in the current search.
            I also had to overhaul name matching.
            It turns out that a few stray spaces or weird punctuation were enough to make the AI claim a professor didn't exist when they were sitting right there in the data.
            `,
          },
          {
            type: "paragraph",
            content: `
            I did make some tradeoffs.
            The internals are definitely more complex now because the system has to manage much richer data retrieval before it even starts drafting an answer.
            I also leaned hard into groundedness, I'd rather the AI be a little cautious than have it sound confident while hallucinating a professor's personality. 
            `,
          },
          {
            type: "paragraph",
            content: `
            The coolest part is that the evidence is now visible.
            It's no longer a black box, you can see the supporting snippets and ratings right alongside the answer.
            It makes the whole thing feel way more transparent, especially when you're trying to compare two professors teaching styles or grading habits.
            `,
          },
          {
            type: "paragraph",
            content: `
            What's actually different now:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Swapped the clunky planner for a fast router that knows when to look up data and when to just talk.",
              "Fixed the brittle name matching so it handles typos and spacing issues without breaking.",
              "Cleaned up the memory so old questions don't leak into new ones.",
              "Built a knowledge layer that actually reads the individual reviews and tags in the JSON.",
              "Added structured evidence so the AI can prove its claims with real data points.",
              "Turned the bot from a basic recommendation tool into a proper QA system for Suffolk students.",
              "Lowered AI response latency, now 2X faster."
            ],
          },
          {
            type: "paragraph",
            content: `
            The break I took from the project was actually really helpful.
            I worked other projects, learned and improved, and now I have a different perspective on how to approach RamAI's problems.
            `,
          },
          {
            type: "image",
            content: ["/ramai-chat.png"],
          },
          {
            type: "paragraph",
            content: `
            I thought this response from the AI was really nice.
            `,
            marginBottom: 1
          },
          {
            type: "paragraph",
            content: `
            But in my opinion Professor Jiang deserves a 5/5 rating, come on Suffolk students.. :p
            `,
          },
        ],
      }
    ]
  },
  {
    slug: "resumexp",
    image: "/rxp-analysis-2.png",
    blogPosts: [
      {
        date: "January 29, 2026 - 7:12PM",
        title: "Curiosity",
        borderColor: "#7cdad5",
        content: [
          {
            type: "paragraph",
            content: `
            I realized I have an AI API key lying around and I've been thinking about applications that could leverage AI to provide real value to users.
            There are a few resume analyzer applications out there that I have used, but I'm really interested in how it actually works.
            I suspect it's simpler than it sounds, so I want to have a go at it.
            `,
          },
          {
            type: "paragraph",
            content: `
            Right off the bat, I already see how the architecture of this project would look like:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "User uploads their resume, clicks a button to analyze it",
              "The file is sent to the file parsing API",
              "The API extracts the text from the resume and sends it to the AI analysis API",
              "Using careful prompt engineering, the AI analyzes the resume and provides suggestions for improvement",
              "The suggestions are sent back to the frontend and displayed to the user",
            ],
          },
          {
            type: "paragraph",
            content: `
            Looking ahead, I presume the main challenge would be making sure the resume passes the Applicant Tracking System (ATS).
            From what I've read, many companies use ATS to filter resumes before a human even sees them.
            So making sure the resume is optimized for ATS would be crucial.
            I'll have to do some research on how ATS systems work and what they look for in resumes.
            `,
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            That's all I had in mind for today, I'll continue working on this in my free time.
            Also, it felt like January flew by really quickly.. just me?
            `,
            marginBottom: 2
          },
        ],
      },
      {
        date: "January 31, 2026 - 1:57AM",
        title: "Pipeline",
        borderColor: "#d24d8b",
        content: [
          {
            type: "paragraph",
            content: `
            I spent a day finishing the MVP for ResumeXP.
            I finally have the full flow working from uploading a resume, to parsing the text, to sending it through the AI pipeline and then visualizing the results in a clean UI.
            Once I started working on it, I could not stop until it was done. It felt exhilarating to see everything come together.
            `,
          },
          {
            type: "paragraph",
            content: `
            The upload and parsing flow was pretty straightforward.
            Users can drop in a PDF, DOCX or TXT file and the analysis service would handle it.
            What I used for each file type:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "'react-pdftotext' library for PDF files, which takes the file object directly and returns the extracted text",
              "'mammoth' library for DOCX files, by converting the file into to an ArrayBuffer, pass it to Mammoth itself, and grab the value field from the result",
              "TXT files or other plain texts, you can just call file.text() which is convenient",
            ],
            marginBottom: 10
          },
          {
            type: "image",
            content: ["/rxp-uploading.png"],
            marginBottom: 10
          },
          {
            type: "paragraph",
            content: `
            Why did I parse the files on the client instead of the server?
            I chose client side parsing because the text extraction requirements were straightforward and supported by lightweight browser libraries like above.
            Parsing on the client reduced backend complexity and made the upload experience feel more responsive.
            If the parsing logic became more complex or needed stricter validation, the server is always there.
            `,
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            Once the text is parsed and ready, it's sent to the AI pipeline.
            This part was straightforward, and having some experience from RamAI doing something similiar helped a lot.
            I built a dedicated API route that handles the entire process of:
            `,
            marginBottom: 2
          },
          {
            type: "bulletpoints",
            content: [
              "Validating the input",
              "Constructing a strict system prompt",
              "Sending the request to the AI model",
              "Cleaning up the AI's response"
            ],
          },
          {
            type: "paragraph",
            content: `
            I designed the analysis pipeline so the AI is constrained to return a strictly defined JSON structure.
            Returning unstructured text would make it difficult to reliably render results on the frontend, so a structured response was necessary.
            By enforcing a schema, the frontend can confidently parse and visualize sections like ratings, strengths, weaknesses, and suggestions without hesitation.
            `,
          },
          {
            type: "paragraph",
            content: `
            To make this robust, I added a JSON extraction and validation step.
            If the model includes extra text outside the expected structure, the parser strips it out and keeps only the valid JSON.
            I also added defensive error handling for missing or malformed fields, ensuring the UI never renders partial or inconsistent data.
            `,
          },
          {
            type: "paragraph",
            content: `
            On the frontend, this structured output made it straightforward to design a clean, readable interface that visualizes the analysis clearly.
            With the MVP complete, the focus now shifts to refining prompt quality, tightening formatting, and improving ATS checks to make the overall experience more polished.
            `,
            marginBottom: 10
          },
          {
            type: "image",
            content: ["/rxp-analysis.png"],
            marginBottom: 8
          },
          {
            type: "paragraph",
            content: `
            7.8 out of 10? Guess I know what I'm fixing next.. :p
            `,
            marginBottom: 2
          },
        ],
      },
      {
        date: "February, 3, 2026 - 12:08PM",
        title: "Flow",
        borderColor: "#1d4eff",
        content: [
          {
            type: "paragraph",
            content: `
            I've been working on wrapping ResumeXP for the past couple of days.
            The few components I've been finishing up are:
            `,
          },
          {
            type: "bulletpoints",
            content: [
              "Job matching based on the user's job description input",
              "Past analysis history for authenticated users",
              "Cover letter generation",
            ],
          },
          {
            type: "paragraph",
            content: `
            There are definitely more features I could add, but I want to keep the app light for now.
            I try to keep these projects small and organized so I can actually finish them and so they're easier to revisit in the future.
            That's the same approach I took with RamAI.
            I can always expand them later if I feel the need.
            `,
          },
          {
            type: "paragraph",
            content: `
            Beyond the technical work, I'm also practicing my flow: ideation, planning, building the MVP, then refining and polishing it.
            Each project teaches me something new about how to approach the next one, and that's been the most valuable part of this whole process.
            `,
          },
          {
            type: "image",
            content: [
              "/rxp-upload-page.png",
            ],
          },
          {
            type: "paragraph",
            content: `
            Visit the site here:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: `
            https://resumexp.xyz
            `,
            link: "https://resumexp.xyz",
          },
          {
            type: "paragraph",
            content: `
            View the source code here:
            `,
            marginBottom: 0
          },
          {
            type: "paragraph",
            content: `
            https://github.com/montasirmoyen/resumexp
            `,
            link: "https://github.com/montasirmoyen/resumexp",
          },
        ],
      }
    ]
  },
  {
    slug: "domain-expansion",
    image: "/de-home.webp",
    collab: true,
    collaborators: [
      {
        name: "montasirmoyen",
        avatarImgUrl: "https://avatars.githubusercontent.com/u/111202851?v=4",
      },
      {
        name: "omaershah",
        avatarImgUrl: "https://avatars.githubusercontent.com/u/267569221?v=4",
      }
    ],
    blogPosts: [
      {
        date: "March 14, 2026",
        title: "Alliance",
        borderColor: "#00e1ff",
        content: [
          {
            type: "paragraph",
            content: `
            I've been watching the season 3 of Jujutsu Kaisen during the break. 
            One of the coolest concepts in the show is the idea of a "Domain Expansion".
            It's essentially a powerful technique where the user creates a pocket dimension that guarantees their attacks will hit.
            `,
          },
          {
            type: "paragraph",
            content: `
            In the show, the users iconically perform a specific hand gesture to activate their Domain Expansion.
            I thought it would be fun to build a computer vision application that could recognize those hand gestures in real time using a webcam, and trigger some kind of on-screen overlay or effect when the gesture is detected.
            It would be a fun way to combine my curiosity in computer vision with my enjoyment of the show.
            I told my younger brother about it and he also found the project interesting, so I decided to invite him to collaborate.
            `,
          },
        ],
      },
      {
        date: "March 15, 2026",
        title: "Architecture",
        borderColor: "#e4e724",
        content: [
          {
            type: "paragraph",
            content: `
            The overall stack of this project is as simple as the concept itself.
            Python for the main application, OpenCV for video processing, and MediaPipe for hand tracking and gesture recognition.
            MediaPipe's hand tracking provides a lot of useful data points, like the positions of each finger and the angles between them.
            The main challenge is going to be accurately recognizing the specific hand gestures associated with the Domain Expansion technique.
            `,
          },
          {
            type: "paragraph",
            content: `
            The project should also be easy to demo and share, so I'm keeping that in mind as I build it out.
            `,
          }
        ],
      },
      {
        date: "March 15, 2026",
        title: "Hindrance",
        borderColor: "#e72431",
        content: [
          {
            type: "paragraph",
            content: `
            Implementing Satoru Gojo's Domain Expansion, "Unlimited Void", was quite simple because the gesture itself is simple.
            Only one hand needed and your middle finger to be wrapped behind your pointer.
            It was easy to set up a MediaPipe pipeline to recognize that gesture, and I ended up finishing it quickly while my brother was sleeping.
            `,
          },
          {
            type: "paragraph",
            content: `
            Then I went onto implementing Sukuna's Domain Expansion, "Malevolent Shrine", which was a lot more challenging.
            The gesture is more complex, requiring both hands and a specific way to position your fingers.
            MediaPipe's hand tracking can struggle with accurately recognizing that gesture, since theres 10 fingers trying to be tracked simultaneously.
            `,
          },
          {
            type: "paragraph",
            content: `
            At first, I was stumped, I had been playing around with different approaches to try to get it working, but nothing seemed to be accurate enough.
            I then set it aside, leaving it for the next day.
            `,
          },
          {
            type: "paragraph",
            content: `
            So today, I sat down with my brother and we brainstormed some solutions together.
            We noticed that the main issue was that MediaPipe was struggling to track all 10 fingers accurately, which made it hard to reliably detect the specific configuration needed for Sukuna's Domain Expansion.
            But what if we didn't need to track all 10 fingers?
            We could just focus on the pinky, ring and middle fingers, since those are the ones that are most critical for the gesture.
            `,
          },
          {
            type: "paragraph",
            content: `
            So we did, we set up a new MediaPipe pipeline that only tracked those three fingers, and we focused our gesture recognition logic on the positions of those fingers relative to each other.
            We made sure that we took into account more factors like fingertip distances and trying to find a triangle formed by the gesture.
            Soon enough, that pull request was merged, and we had a working implementation of Sukuna's Domain Expansion as well.
            `,
          },
          {
            type: "image",
            content: ["/de-sukuna.webp"],
            scale: 0.25,
          }
        ],
      },
      {
        date: "March 26, 2026",
        title: "Foundation",
        borderColor: "#ff5ddc",
        content: [
          {
            type: "paragraph",
            content: `
            We have implemented 6 domain expansions so far:
            `,
          },
          {
            type: "bulletpoints",
            content: [
              "Satoru Gojo's \"Infinite Void\"",
              "Ryomen Sukuna's \"Malevolent Shrine\"",
              "Mahito's \"Self-Embodiment of Perfection\"",
              "Yuji Itadori's Unnamed Domain Expansion",
              "Kinji Hakari \"Idle Death Gamble\"",
              "Yuta Okkotsu's \"Authentic Mutual Love\""
            ],
          },
          {
            type: "paragraph",
            content: `
            Of course, there are many more domain expansions in the series, and we plan to implement as many as we can.
            But now, the foundation is there and the architecture is set up.
            The app detects the specific hand gestures for each domain expansion and displays the text.
            But it feels incomplete, we want to add some kind of visual effect or overlay that appears when the gesture is detected, to make it more immersive and fun to use.
            `,
          },
          {
            type: "paragraph",
            content: `
            But it has been a fun project to work on, and it's been a great way to learn more about computer vision and gesture recognition.
            `,
          },
        ],
      }
    ]
  },
  {
    slug: "aiflash",
    image: "/aif-flashcards.png",
    challenge: true,
    blogPosts: [
      {
        date: "Part 1",
        title: "Continuity",
        borderColor: "#ff628e",
        content: [
          {
            type: "paragraph",
            content: `
            I really enjoyed building the Crawler and Universal Room Booker (URB) projects recently, the thrill of building projects from scratch in a day was an amazing experience.
            So much so, that I wanted to do it again, but this time with a different focus.
            I've never used AWS, and the idea of building something without worrying about servers or infrastructure is really appealing to me.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            To give more context behind my growing curiosity around serverless architecture, 
            I recently had a technical interview where the interviewer (really nice guy) was telling me how his software engineering team works. 
            He described how he and his team transitioned core backend systems to an event driven, serverless model on AWS because it reduced operational overhead and allowed them to focus purely on business logic.
            That stuck with me because up until that point, most of my projects had been focusing on features.
            But hearing someone frame architecture as a strategic advantage, something that directly impacts scalability, maintainability, and team velocity, made me realize there was a deeper layer of engineering I hadn't fully explored yet.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "Part 2",
        title: "Architecture",
        borderColor: "#8eedbc",
        content: [
          {
            type: "paragraph",
            content: `
            I've decided on the idea of an AI powered flashcard generator for students.
            The core concept is simple: users input their raw study notes, and the app uses generative AI to transform those notes into interactive flashcards.
            The stack will simply be Angular and, of course, AWS.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            But, I feel like this project should be more for me to get comfortable with AWS and exploring the interface and services, rather than building a super polished product.
            Again, I've never used AWS, so stuff like Lambda, API gateways and S3 are all new to me.
            I want to make sure I understand how they work and how to use them effectively.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "Part 3",
        title: "Implementation",
        borderColor: "#7cf93d",
        content: [
          {
            type: "paragraph",
            content: `
            The implementation started with the "brain" of the app: an AWS Lambda function.
            I chose Node.js for the runtime since it's lightweight and works well with the async nature of AI API calls.
            Getting the OpenAI library to actually run in the AWS environment was the first real issue.
            I had to learn about Lambda Layers to package my [node_modules] properly so the function could actually import the dependencies it needed to talk to OpenRouter.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Next, I had to bridge the gap between my Angular frontend and the backend.
            I set up an HTTP API via AWS API Gateway.
            This acted as the front door, taking the notes from my UI and triggering the Lambda.
            A huge chunk of time went into configuring the CORS.
            It's one of those things that works fine on localhost but becomes a brick wall in the cloud if you forget to explicitly tell AWS to trust your specific frontend origin.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I used S3 for static website hosting, but eventually used AWS Amplify because it handled the SSL certificates and deployment pipelines much more smoothly.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Seeing the data flow from a textarea in Angular, through an API gateway, and processed by an LLM in a Lambda was pretty satisfying.
            It felt less like writing code and more like assembling a high performance machine.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "Part 4",
        title: "Testing",
        borderColor: "#9760ff",
        content: [
          {
            type: "paragraph",
            content: `
            Testing was a lesson in cloud latency.
            Initially, I was getting "Unknown Errors" in the console.
            After looking through CloudWatch logs, I realized my Lambda was timing out.
            The default 3 second limit wasn't enough for an AI model to think and respond.
            To improve SSL handshake performance, I increased the memory allocation and extended the timeout to 30 seconds to provide the function with more CPU capacity. 
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I also ran into issues with the AI response format.
            LLMs like to talk, but my frontend needed strict JSON.
            I had to refine my system prompt to ensure the AI returned only the raw array.
            I tested this by feeding it messy, unstructured lecture notes.. like my OS notes on Logical Address Spaces and verified the cards came back correctly categorized with consistent IDs.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            Once the backend was stable, I tested the end to end flow from the live Amplify URL.
            Seeing the 3D flip animations work with real data pulled from the cloud confirmed everything was finally solid.
            `,
            marginBottom: 4
          }
        ],
      },
      {
        date: "Part 5",
        title: "Reflection",
        borderColor: "#115bcb",
        content: [
          {
            type: "paragraph",
            content: `
            Looking back, the biggest takeaway wasn't just learning AWS, it was learning how to think in terms of managed services.
            In my previous projects, I was responsible for everything.
            Here I learned to delegate, I let S3 handle the files and Lambda handle the logic.
            It's a shift in mindset from building a server to building a system.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            I also think that Full Stack in 2026 could really mean "Full-Stack Cloud".
            Understanding how to configure a VPC, manage IAM roles, and debug a distributed trace in CloudWatch is just as important as knowing how to center a div in CSS.
            The complexity moved from the code itself to the connections between the services.
            `,
            marginBottom: 4
          },
          {
            type: "paragraph",
            content: `
            AIFlash started as a way to get comfortable with the AWS console, but it turned into a blueprint for how I want to build software going forward; fast, decoupled, and infinitely scalable.
            `,
            marginBottom: 4
          },
          {
            type: "image",
            content: ["/aif-flashcards.png"],
            marginBottom: 2
          },
          {
            type: "paragraph",
            content: `
            Time to study..
            `,
            marginBottom: 4
          },
        ],
      }
    ]
  },
  {
    slug: "crawler",
    image: "/crawler-home.jpg",
    challenge: true,
    blogPosts: [
      {
        date: "Part 1",
        title: "Beyond",
        borderColor: "#00e1ff",
        content: [
          {
            type: "paragraph",
            content: `
            I'm currently taking an Operating Systems course this semester.
            Professor DZ has made it interactive and interesting so far, and it's given me a much deeper understanding of how computers work under the hood.
            Threads, scheduling, synchronization, memory management.. they're only seen as exam topics if you look at them from a surface level, but when you really dive into them, you see how they shape the way we build software and systems.
            `,
          },
          {
            type: "paragraph",
            content: `
            We've been given a semester long project by the Prof called "psirver".
            It is essentially a user-space C++ server on a POSIX system that executes and monitors Python scripts over HTTP.
            It has forced me to think about process control, signal handling, and fault isolation in a way that most assignments never did.
            `,
          },
          {
            type: "paragraph",
            content: `
            I enjoyed building psirver, but I wanted a second project where I could make my own architectural tradeoffs from day one.
            So I thought of this simple web crawler.
            It's small enough to finish quickly, but deep enough to explore concurrency and resource management.
            `,
          },
          {
            type: "paragraph",
            content: `
            I gave myself a 24 hour time constraint to keep momentum high and decisions practical.
            The challenge and goal is not to build the biggest crawler on day one, but to design something correct, measurable, and easy to extend without rewriting everything later.
            `,
          }
        ],
      },
      {
        date: "Part 2",
        title: "Architecture",
        borderColor: "#fabd5a",
        content: [
          {
            type: "paragraph",
            content: `
            I chose C++ because I want explicit control over memory, threading, and performance behavior, just like psirver.
            The stack is intentionally more minimal than other projects I've worked on.
            CMake for builds, libcurl for HTTP fetches, and STL synchronization primitives for safe shared-state coordination.
            `,
          },
          {
            type: "paragraph",
            content: `
            At a high level, the crawler runs on a producer consumer model.
            A thread-safe URL queue feeds worker threads, each worker fetches a page, extracts candidate links, normalizes and deduplicates them, and pushes new URLs back into the queue until limits are reached.
            `,
          },
          {
            type: "paragraph",
            content: `
            Key constraints are politeness and control.
            I cap crawl depth, guard against duplicate visits, and plan rate limiting per domain.
            Fast code is good, but predictable behavior under load is the real engineering target.
            `,
          },
        ],
      },
      {
        date: "Part 3",
        title: "Implementation",
        borderColor: "#28ff85",
        content: [
          {
            type: "paragraph",
            content: `
            I started the implementation by keeping things extremely small. 
            Instead of worrying about threads or link extraction immediately, I just wanted the crawler to fetch a single page and print something useful.
            The first working version simply accepted a seed URL, fetched the HTML using libcurl, and logged that the request completed successfully.
            `,
          },
          {
            type: "paragraph",
            content: `
            Once that worked, I added the basic pipeline: a queue of URLs to visit and a set that tracks which URLs have already been crawled.
            Even though the crawler is simple right now, separating those responsibilities early made the code easier to reason about.
            The queue handles scheduling, while the visited set prevents the crawler from getting stuck revisiting the same pages.
            `,
          },
          {
            type: "paragraph",
            content: `
            After the basic flow worked, I began wiring in link extraction so the crawler could actually discover new pages.
            At this stage I wasn't aiming for perfect HTML parsing yet.
            The actual goal was just to prove that the crawler could fetch a page, extract links, and continue crawling.
            Once that feedback loop worked, the rest of the architecture started to make more sense.
            `,
          }
        ],
      },
      {
        date: "Part 4",
        title: "Testing",
        borderColor: "#de679c",
        content: [
          {
            type: "paragraph",
            content: `
            Testing this project was mostly about observing behavior rather than writing formal unit tests.
            Since the crawler interacts with the real web, the easiest way to verify things was to run it on small, predictable sites and watch what happened.
            `,
          },
          {
            type: "paragraph",
            content: `
            I started by crawling very small sites with low page limits to confirm that URLs were being discovered and scheduled correctly.
            Logging helped a lot here, printing each crawled URL made it obvious when the crawler was revisiting pages or failing to extract links properly.
            `,
          },
          {
            type: "paragraph",
            content: `
            I also tried testing edge cases like invalid URLs and pages that returned errors.
            In those cases the crawler shouldn't crash or stall it should simply skip the page and continue working through the queue.
            That kind of resilience is important for crawlers because the web is messy and unpredictable.
            `,
          }
        ],
      },
      {
        date: "Part 5",
        title: "Reflection",
        borderColor: "#ffffff",
        content: [
          {
            type: "paragraph",
            content: `
            One thing I liked about this project is that it connects directly to concepts I'm learning in my os class.
            Queues, synchronization, worker threads.. you start seeing why these topics are on OS exams when you build something like this.
            `,
          },
          {
            type: "paragraph",
            content: `
            Giving myself a 24 hour constraint also changed how I approached the design.
            Instead of trying to make everything perfect, I focused on building something that worked first and could be improved later and that mindset made progress much faster.
            `,
          },
          {
            type: "paragraph",
            content: `
            The crawler is still pretty small, but it already feels like a solid base to experiment with.
            There are a lot of directions it could go next like better HTML parsing, smarter scheduling, or even distributed crawling.
            For now though, I'm happy that the core loop works and that I got to apply some systems concepts in a practical way.
            `,
          },
          {
            type: "paragraph",
            content: `
            This was a great way to wrap up Spring Break, I'll definitely be revisiting this project later to add more features and optimizations, but it was a fun challenge to build something like this in a short time and see how far I could get with it.
            `,
          }
        ],
      }
    ]
  },
  {
    slug: "urb",
    image: "/urb-home.jpg",
    challenge: true,
    blogPosts: [
      {
        date: "Part 1",
        title: "Endeavor",
        borderColor: "#ff453b",
        content: [
          {
            type: "paragraph",
            content: `
            While I'm taking a break from InfiniteCode, I thought of starting a challenge to build a backend system in one day.
            It could be for any use case, but I would need to build it from zero, including setting up the database, designing the API, and implementing the core logic.
            I also would need to learn how to use Spring Boot, which is a popular Java framework for building backend applications.
            I want to do this to grow my backend development skills and see how much I would accomplish in a limited time frame.
            `,
          },
          {
            type: "paragraph",
            content: `
            I'm settling on building a room booking system, which is a common use case for backend applications and is something that interests me.
            I'm always booking library rooms at my university, and I was curious about how the backend systems for those work, and if I could build something similar.
            This project is open source on GitHub, and anyone can use it as they please, but it also serves as proof that I built this project in a day.
            `,
          },
          {
            type: "paragraph",
            content: `
            I'll break this challenge into sections: architecture and design decisions, implementation details, testing, and reflections on the process and what I learned.
            The goal is to have the project ready on GitHub by the end of the day and document it here.
            I'll refine the blog posts after the challenge for readability and accuracy.
            `,
          },
          {
            type: "paragraph",
            content: `
            I've always loved a challenge, so let's see how this goes.
            `,
          },
        ],
      },
      {
        date: "Part 2",
        title: "Architecture",
        borderColor: "#dabf7c",
        content: [
          {
            type: "paragraph",
            content: `
            For the tech stack, I chose Java and Spring Boot to sharpen my Java skills and learn Spring Boot, which are widely used in the industry for building scalable backend systems.
            PostgreSQL handles the database for its reliability and support for complex queries and transactions, which are crucial for a booking system.
            Maven manages dependencies and project structure, which is standard in Java projects.
            `,
          },
          {
            type: "paragraph",
            content: `
            The core functionality allows users to create rooms with capacity limits and book them while preventing overlapping reservations.
            The main challenge is ensuring the booking logic is safe and handles concurrent requests without allowing double bookings.
            This requires proper database-level constraints and graceful API error handling.
            `,
          },
          {
            type: "paragraph",
            content: `
            The API has two main endpoints: one for creating and listing rooms, and another for creating bookings.
            The booking endpoint checks for overlapping reservations in the same room and rejects conflicting requests.
            The database schema uses JPA entities with proper validation and relationships to efficiently manage rooms and bookings.
            `,
          },
        ],
      },
      {
        date: "Part 3",
        title: "Implementation",
        borderColor: "#39ffff",
        content: [
          {
            type: "paragraph",
            content: `
            The implementation involved setting up a Spring Boot project with Maven, configuring PostgreSQL as the database, and building the REST API.
            I created JPA entities for Room and Booking, repositories for database operations, and service layer logic for handling bookings.
            Controllers handle HTTP requests and return appropriate responses using Data Transfer Objects.
            `,
          },
          {
            type: "paragraph",
            content: `
            The booking service checks for overlapping bookings by querying the database for any existing reservations that conflict with the requested time frame.
            I used Spring Data JPA custom queries to efficiently find conflicts before creating new bookings.
            Global exception handling ensures consistent error responses across all endpoints.
            `,
          },
          {
            type: "paragraph",
            content: `
            Input validation uses Jakarta Validation annotations on DTOs to reject invalid requests early.
            Lombok reduces boilerplate code for getters, setters, and constructors.
            The project follows standard Spring Boot conventions with a clear separation of concerns across controllers, services, repositories, and entities.
            `,
          }
        ],
      },
      {
        date: "Part 4",
        title: "Testing",
        borderColor: "#30b0c0",
        content: [
          {
            type: "paragraph",
            content: `
            Testing the room booking system required setting up an integration test environment with PostgreSQL.
            I used Spring Boot Test with JUnit 5 to create comprehensive tests that verify the API behavior end-to-end.
            The tests run against a real PostgreSQL instance to ensure the booking logic works correctly with the database.
            `,
          },
          {
            type: "paragraph",
            content: `
            I implemented Docker support to standardize the development environment and eliminate manual PostgreSQL setup.
            A Dockerfile packages the Spring Boot application, and a Docker Compose file orchestrates both the app and PostgreSQL in a single command.
            This makes it trivial for others to get the project running without installing Java, Maven, or PostgreSQL locally.
            `,
          },
          {
            type: "paragraph",
            content: `
            Test cases cover creating rooms, listing rooms, creating valid bookings, and rejecting overlapping bookings.
            The integration tests verify that the API correctly handles edge cases like back-to-back bookings and exact time overlaps.
            The test suite ensures data persists correctly in PostgreSQL and that the booking validation logic works as intended.
            `,
          }
        ],
      },
      {
        date: "Part 5",
        title: "Reflection",
        borderColor: "#a2845e",
        content: [
          {
            type: "paragraph",
            content: `
            Building this project in a day taught me that Spring Boot significantly accelerates backend development.
            The framework handles so much boilerplate code that I could focus on business logic rather than infrastructure.
            JPA and Spring Data made database interactions straightforward, and the built-in dependency injection system kept the code organized and testable.
            `,
          },
          {
            type: "paragraph",
            content: `
            What I enjoyed most was the clean architecture that Spring Boot encourages.
            The separation between controllers, services, and repositories made the code easy to understand and modify.
            Lombok saved considerable time by eliminating repetitive getter and setter code.
            Working with PostgreSQL proved reliable, and the simple SQL queries needed for this project were easy to construct through JPA custom methods.
            `,
          },
          {
            type: "paragraph",
            content: `
            The most challenging part was handling concurrent booking attempts and ensuring the database prevents conflicts.
            I had to think carefully about the proper way to query for overlapping bookings to catch all edge cases.
            Balancing fast development with proper testing was also tricky within the time constraint.
            `,
          },
          {
            type: "paragraph",
            content: `
            With Docker support already in place, future improvements could include implementing user authentication, adding pagination for listing bookings, and including more detailed error messages.
            This one-day challenge proved that with the right tools and framework, you can build a functional backend system quickly while maintaining clean, readable code.
            `,
          }
        ],
      }
    ]
  },
  {
    slug: "summer-2026",
    image: "/background.jpg",
    writingType: "personal",
    tags: ["Internship", "Research"],
    blogPosts: [
      {
        title: "Sunny",
        borderColor: "#fff020",
        content: [
          {
            type: "paragraph",
            content: `
            This summer is going to be pretty eventful for me.
            I'll be focusing on gaining real-world software engineering experience, contributing to AI research, and continuing to build and scale my own systems.
            `,
          },
          {
            type: "paragraph",
            content: `
            Rather than treating the summer as a break, I'm approaching it as an opportunity to accelerate my growth and deepen my understanding of how software is built, used, and scaled in real environments.
            `,
          }
        ],
      },
      {
        title: "Intern",
        borderColor: "#0569ff",
        content: [
          {
            type: "paragraph",
            content: `
            This summer, I'll be interning at Cambridge Associates as a Software Engineering Intern in their Boston office.
            `,
          },
          {
            type: "paragraph",
            content: `
            My focus is to understand how production-level financial systems are designed, maintained, and scaled.
            I want to strengthen my ability to write reliable, maintainable code while learning how engineering decisions are made in a real-world business context.
            `,
          }
        ],
      },
      {
        title: "Research",
        borderColor: "#4ff760",
        content: [
          {
            type: "paragraph",
            content: `
            In parallel, I'll be contributing to AI research and development with Professor Jiang at Suffolk, focused on building an AI agent to support students in probability and statistics.
            `,
          },
          {
            type: "paragraph",
            content: `
            The goal is to create a system that can not only answer questions, but also generate clear explanations, examples, and visualizations.
            One of the key challenges we're addressing is improving how AI handles graphing and visual reasoning, areas where current large language models like ChatGPT often fall short.
            `,
          },
          {
            type: "paragraph",
            content: `
            This project is an opportunity to work on applied AI in an educational setting, collaborate closely with peers, and contribute to something that could meaningfully improve how students understand complex material.
            `,
          }
        ],
      },
      {
        title: "Infra",
        borderColor: "#ff214a",
        content: [
          {
            type: "paragraph",
            content: `
            Alongside my internship and research, I'll continue developing infrastructure for my virtual soccer league, which currently maintains around 1,000+ active players.
            `,
          },
          {
            type: "paragraph",
            content: `
            I've appointed league operations to two chairmen, allowing me to focus on the technical side, building systems and automation tools to manage logistics, contracts, and player interactions more efficiently.
            `,
          },
          {
            type: "paragraph",
            content: `
            This includes expanding a Discord bot I built to handle core league functionality, as well as improving the overall system to support scale and reliability as the player base grows.
            `,
          },
          {
            type: "paragraph",
            content: `
            Last summer, I created the successor to MPS called "Pure Soccer".
            The league is built around that game, which has grown into a large and active community:
            `,
          },
          {
            type: "bulletpoints",
            content: [
              "25M+ plays",
              "450,000+ favorites",
              "Peak concurrent player count of 3,600+",
              "50K+ group members"
            ]
          }
        ],
      },
      {
        title: "Presidency",
        borderColor: "#4b23ff",
        content: [
          {
            type: "paragraph",
            content: `
            I've been elected as the 2026-2027 Vice President of the Suffolk Programming, AI & Research Club (SPARC).
            `,
          },
          {
            type: "paragraph",
            content: `
            This role will push me beyond just building software and into leadership, organization, and community-building.
            My focus will be on creating meaningful opportunities for members, whether through technical workshops, collaborative projects, or industry exposure.
            `,
          },
          {
            type: "paragraph",
            content: `
            Over the summer, I'll be working closely with the President & previous President (who's done a brilliant job) to understand what's been successful and how to continue growing the club.
            From there, I'll begin planning initiatives with the e-board for the fall that provide real value to members.
            `,
          }
        ],
      },
    ],
  }
];

export const projects: Project[] = rawProjects.map((project) =>
  applySharedFields(project),
);

export const blogs: Blog[] = rawBlogs.map((blog) => applySharedFields(blog));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export { getTechDoc, getTechIcon, techStack };
export type { Blog, Project };
