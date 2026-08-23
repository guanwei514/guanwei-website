import carbonFiberDrillingImage from "@/assets/portfolio/carbon-fiber-drilling.webp"
import edmProductionLineImage from "@/assets/portfolio/edm-production-line.webp"
import ethercatImage from "@/assets/portfolio/ethercat-master.webp"
import aiResearchNotebookImage from "@/assets/portfolio/ai-research-notebook.gif"
import robotControlImage from "@/assets/portfolio/robot-control.jpg"
import smartManufacturingImage from "@/assets/portfolio/smart-manufacturing.webp"
import stirrupProductionImage from "@/assets/portfolio/stirrup-production.webp"
import type { Language, SiteContent } from "@/types/site"

export const siteContent: Record<Language, SiteContent> = {
  "zh-TW": {
    accessibility: {
      closeMenu: "關閉選單",
      language: "切換語言",
      menu: "開啟選單",
      skipToContent: "跳到主要內容",
    },
    nav: [
      { id: "home", label: "首頁" },
      { id: "about", label: "關於" },
      { id: "experience", label: "經歷" },
      { id: "skills", label: "專業" },
      { id: "research", label: "研究" },
      { id: "work", label: "專案" },
      { id: "contact", label: "聯絡" },
    ],
    hero: {
      availability: "TAIWAN · UTC+8",
      contactAction: "聯絡我",
      eyebrow: "SYSTEMS DEVELOPER · ENGINEERING MANAGER",
      facts: [
        { label: "Backend", value: ".NET" },
        { label: "Frontend", value: "React · TypeScript" },
        { label: "Domain", value: "Smart Factory Systems" },
      ],
      greeting: "您好，我是",
      name: "蘇冠瑋",
      ontology: {
        ariaLabel: "Factory ontology knowledge graph",
        coreDescription: "Entities · Relations · Meaning",
        coreEyebrow: "SHARED CONTEXT",
        coreTitle: "FACTORY\nONTOLOGY",
        legend: ["ENTITY", "RELATION", "CONTEXT"],
        nodes: [
          {
            detail: "Machine · Robot · Sensor",
            id: "asset",
            index: "ENTITY · 01",
            title: "ASSET",
          },
          {
            detail: "Step · Flow · State",
            id: "process",
            index: "ENTITY · 02",
            title: "PROCESS",
          },
          {
            detail: "Signal · Event · Metric",
            id: "data",
            index: "ENTITY · 03",
            title: "DATA",
          },
          {
            detail: "Order · Material · Quality",
            id: "product",
            index: "ENTITY · 04",
            title: "PRODUCT",
          },
        ],
        status: "SEMANTIC SYSTEM MODEL",
      },
      primaryAction: "查看專案",
      summary:
        "專注於智慧工廠系統整合，橫跨製造現場與倉儲物流，從需求釐清、架構設計到全端實作與交付，把複雜的現場問題轉化為可落地、可維護並能持續演進的解決方案。",
      title: "理解工廠現場\n解決複雜問題\n實現智慧化系統",
    },
    about: {
      eyebrow: "01 · ABOUT",
      imageAlt: "蘇冠瑋的個人照片",
      paragraphs: [
        "我是一名持續參與實作的系統開發者，目前也負責開發團隊管理。從機械、控制、機電整合與數位製造的基礎出發，再延伸至全端軟體、系統架構與團隊管理，逐步建立橫跨製造現場、倉儲物流與應用系統的完整解題能力。",
        "面對客戶需求，我會先釐清設備、流程、資料與操作情境，辨識真正的問題與限制，再以足夠的技術掌握度完成可行性評估、架構設計、全端實作、效能優化與交付驗證。我要提供的不是停在簡報上的構想，而是能被實現、能在現場運作，也能長期維護的解決方案。",
        "我重視每一個工程環節，不讓模糊的假設與未驗證的細節成為後續風險。同時保持對新技術的熱忱與持續學習，讓自己的知識、工具與判斷力不斷成長，從容回應產業與需求的改變。",
      ],
      principles: [
        {
          index: "A",
          title: "理解現場",
          description: "從設備、流程、資料與使用情境出發，找出真正需要解決的問題。",
        },
        {
          index: "B",
          title: "完整實現",
          description: "從需求評估、架構設計到全端實作與驗證，讓方案可以部署、可以使用。",
        },
        {
          index: "C",
          title: "持續演進",
          description: "建立可維護、可擴充的工程基礎，持續學習並讓系統因應變化。",
        },
      ],
      profileCaption: "AUTOMATION · SOFTWARE · SYSTEMS",
      profileLabel: "PROFILE · 01",
      title: "理解現場本質\n打造可靠可行的方案",
    },
    experience: {
      currentLabel: "CURRENT",
      education: [
        {
          degree: "機械工程碩士 · 系統控制組",
          detail: "研究方向：Delta Robot 適應性控制",
          id: "ntust-master",
          institution: "國立臺灣科技大學",
          period: "2016 — 2018",
        },
        {
          degree: "Exchange Student Program",
          id: "esslingen-exchange",
          institution: "Hochschule Esslingen, Germany",
          period: "2016.03 — 2016.08",
        },
        {
          degree: "機械工程學士",
          id: "ntust-bachelor",
          institution: "國立臺灣科技大學",
          period: "2012 — 2016",
        },
      ],
      educationTitle: "學歷",
      eyebrow: "02 · EXPERIENCE",
      intro:
        "從控制研究與數位製造奠定現場基礎，再走進全端產品開發、系統架構與團隊管理，持續拓展解決複雜自動化問題所需的能力。",
      roles: [
        {
          company: "佳研智聯股份有限公司",
          current: true,
          department: "倉儲核心開發部",
          description:
            "帶領倉儲核心系統開發與技術決策，在持續親自參與系統架構、關鍵功能實作及效能優化的同時，負責團隊管理、資源配置、風險分析與跨部門協作，確保產品品質與交付。",
          id: "jayan-manager",
          period: "2024.09 — Present",
          role: "經理",
        },
        {
          company: "佳研智聯股份有限公司",
          department: "產品開發部",
          description:
            "負責自動化軟體產品的全端開發與核心功能實作，涵蓋系統架構設計、跨系統整合、前後端開發，以及效能分析與優化，建立可維護、可擴充的產品基礎。",
          id: "jayan-senior-engineer",
          period: "2022.08 — 2024.08",
          role: "資深工程師",
        },
        {
          company: "工業技術研究院",
          department: "智慧機械中心 · 數位製造技術部門",
          description:
            "參與數位製造與智慧機械相關系統研發，橫跨機電控制、設備通訊與系統整合，並將現場需求轉化為可落地的應用軟體。",
          id: "itri-system-engineer",
          period: "2018.11 — 2022.07",
          role: "軟體系統工程師",
        },
      ],
      rolesTitle: "工作經歷",
      title: "整合控制、軟體與管理\n讓解決方案落實於現場",
    },
    skills: {
      credentials: [
        {
          date: "2021",
          issuer: "High Tech Institute, The Netherlands",
          title: "System Architect",
        },
        {
          date: "2021",
          issuer: "High Tech Institute",
          title: "Passive Damping for High Tech Systems",
        },
        { date: "2017", issuer: "TOEIC", title: "TOEIC 830" },
        {
          date: "2015",
          issuer: "National Instruments",
          title: "Certified LabVIEW Associate Developer",
        },
      ],
      credentialsTitle: "證照與進修",
      eyebrow: "03 · EXPERTISE",
      groups: [
        {
          index: "01",
          title: "Full-stack Engineering",
          description: "從資料模型、後端服務到操作介面，完整實現可維護、可擴充的軟體產品。",
          items: [
            ".NET",
            "TypeScript",
            "React",
            "Vite",
            "Container",
            "Microservices",
            "SQL",
            "NoSQL",
          ],
        },
        {
          index: "02",
          title: "Automation Integration",
          description: "理解設備、控制、通訊，以及生產與倉儲流程，讓軟體正確接入智慧工廠並解決實際問題。",
          items: [
            "System Integration",
            "Automation",
            "Fieldbus",
            "Motion Control",
            "Mechatronics",
          ],
        },
        {
          index: "03",
          title: "Architecture & Delivery",
          description: "以架構設計、效能分析、風險辨識與驗證，支撐可靠交付與系統長期演進。",
          items: [
            "Clean Architecture",
            "CI/CD",
            "Git",
            "Design Patterns",
            "VM Provisioning",
            "Windows / Linux Server",
          ],
        },
      ],
      patent: {
        date: "2020 · Taiwan",
        label: "專利",
        title: "1704434 · Drilling System And Method Thereof",
      },
      title: "跨域知識與工程紀律\n支撐每一個落地決策",
    },
    research: {
      currentDescription:
        "聚焦邊緣端 AI、模型微調與有限運算資源下的推論效率，並以本地端模型與研究紀錄流程持續驗證可行性。",
      currentItems: ["Edge AI", "Fine-tuning", "Unsloth", "QLoRA", "LLM"],
      currentTitle: "LLM 應用實作",
      eyebrow: "04 · AI RESEARCH",
      horizonDescription:
        "近期研究重心延伸至 Physical AI，透過 NVIDIA Isaac Sim 與 Omniverse 生態探索 Sim-to-Real 與自主系統，並以 Ontology 建立設備、流程與知識之間可推理的語意關係。",
      horizonItems: [
        "Physical AI",
        "NVIDIA Isaac Sim",
        "Sim-to-Real",
        "Ontology",
        "Autonomous Systems",
      ],
      horizonTitle: "Physical AI 與自主系統",
      image: aiResearchNotebookImage,
      imageAlt: "AI 電子研究紀錄簿、地端模型管理與專利關鍵詞分析成果輪播",
      intro:
        "獨立於語言模型 Side Project 的近期研究主軸，探索 AI 如何理解設備、流程與實體世界，並轉化為未來工廠可落地的系統能力。",
      projectDescription:
        "以個人電子研究紀錄簿為核心，結合 AI 進行專利關鍵詞解析，持續累積研究主題、模型實驗與分析結果，讓分散的技術探索可以被整理、比較與回溯。",
      projectLabel: "CURRENT SIDE PROJECT · 2026",
      projectTitle: "AI 電子研究紀錄簿",
      secondaryProject: {
        description:
          "建置面向個人知識資產的私人儲存與檢索空間，透過權限分層控管內容邊界，並結合 RAG、Harness 與 AI Agent，讓受控資料可以被安全地搜尋、理解與運用。",
        items: ["Private Storage", "Access Control", "RAG", "Harness", "AI Agent"],
        label: "SIDE PROJECT · PRIVATE SYSTEM",
        title: "AI 資源庫（AI Drive）",
      },
      statement:
        "研究重點不只是導入模型，而是建立從現場問題、知識語意、模型能力到系統落地的完整路徑，持續評估 AI 如何改變現行工廠與未來藍圖規劃。",
      title: "持續鑽研 AI\n探索工廠的下一步",
    },
    work: {
      eyebrow: "05 · SELECTED WORK",
      intro:
        "目前僅展示可公開的代表性專案，記錄我如何在不同階段整合控制、設備與軟體，逐步把研究概念與現場需求轉化為可運作的成果。目前工作重心已延伸至倉儲核心系統，相關現行專案與研發內容涉及保密，暫不對外揭露。",
      projects: [
        {
          category: "Smart Manufacturing",
          date: "Oct · 2021",
          description: "整合生產設備、製造流程與操作介面，讓分散的現場資訊形成可追蹤、可協作的智慧製造流程。",
          id: "smart-manufacturing-integration",
          image: smartManufacturingImage,
          imageAlt: "智慧製造倉儲管理系統操作畫面",
          tags: ["System Integration", "Automation", "MCS", "RMS"],
          title: "智慧製造整合系統",
        },
        {
          category: "Steel Automation",
          date: "Oct · 2021",
          description: "將設備控制、製程邏輯與人機操作整合為一致流程，降低複雜工序的操作與協作負擔。",
          id: "stirrup-production-automation",
          image: stirrupProductionImage,
          imageAlt: "鋼筋箍筋自動化設備運作畫面",
          tags: ["Control", "Manufacturing", "Integration"],
          title: "鋼筋箍筋自動化系統",
        },
        {
          category: "Production Automation",
          date: "Dec · 2020",
          description: "整合多機台協作與生產流程，將放電加工從單機作業推進為可協調運作的自動化產線。",
          id: "edm-production-automation",
          image: edmProductionLineImage,
          imageAlt: "放電加工自動化生產線管理畫面",
          tags: ["Automation", "Production Line", "Integration"],
          title: "放電加工自動化生產線",
        },
        {
          category: "Industrial Networking",
          date: "Mar · 2020",
          description: "完成 EtherCAT 主站的通訊、控制與系統整合，建立設備即時協作所需的技術基礎。",
          id: "ethercat-master-development",
          image: ethercatImage,
          imageAlt: "EtherCAT 主站開發畫面",
          tags: ["EtherCAT", "C++", "Motion"],
          title: "EtherCAT 主站開發",
        },
        {
          category: "Precision Manufacturing",
          date: "Mar · 2019",
          description: "整合控制演算法、機電系統與應用軟體，將精密加工研究轉化為可操作的鑽孔系統。",
          id: "carbon-fiber-drilling",
          image: carbonFiberDrillingImage,
          imageAlt: "碳纖維鑽孔系統實驗設備",
          tags: ["Control", "Mechatronics", "Research"],
          title: "碳纖維鑽孔系統",
        },
        {
          category: "Control Research",
          date: "Mar · 2016",
          description: "從控制模型、演算法設計到實機驗證，完成二自由度機器人的適應性控制研究與實作。",
          id: "adaptive-robot-control",
          image: robotControlImage,
          imageAlt: "二自由度機器人控制實驗設備",
          tags: ["Adaptive Control", "Robotics", "MATLAB"],
          title: "2 軸機器人的適應性控制",
        },
      ],
      title: "從控制研究到智慧工廠\n讓概念成為現場成果",
    },
    contact: {
      availability: "歡迎交流智慧工廠、製造與倉儲系統整合，以及軟體開發。",
      description:
        "如果你正面對製造自動化、智慧倉儲、工廠智慧化轉型或複雜系統整合問題，我樂於從現場需求、技術可行性與交付風險一起梳理，找到真正能實現的方向。",
      emailLabel: "寄送 Email",
      eyebrow: "06 · CONTACT",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      title: "釐清複雜問題\n讓解決方案真正落地",
    },
    footer: {
      backToTop: "回到頂端",
      lastUpdated: "最後更新：2026/08/23",
      lastUpdatedIso: "2026-08-23",
    },
  },
  en: {
    accessibility: {
      closeMenu: "Close menu",
      language: "Switch language",
      menu: "Open menu",
      skipToContent: "Skip to main content",
    },
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Expertise" },
      { id: "research", label: "Research" },
      { id: "work", label: "Work" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      availability: "TAIWAN · UTC+8",
      contactAction: "Contact me",
      eyebrow: "SYSTEMS DEVELOPER · ENGINEERING MANAGER",
      facts: [
        { label: "Backend", value: ".NET" },
        { label: "Frontend", value: "React · TypeScript" },
        { label: "Domain", value: "Smart Factory Systems" },
      ],
      greeting: "Hello, I am",
      name: "Guan Wei Su",
      ontology: {
        ariaLabel: "Factory ontology knowledge graph",
        coreDescription: "Entities · Relations · Meaning",
        coreEyebrow: "SHARED CONTEXT",
        coreTitle: "FACTORY\nONTOLOGY",
        legend: ["ENTITY", "RELATION", "CONTEXT"],
        nodes: [
          {
            detail: "Machine · Robot · Sensor",
            id: "asset",
            index: "ENTITY · 01",
            title: "ASSET",
          },
          {
            detail: "Step · Flow · State",
            id: "process",
            index: "ENTITY · 02",
            title: "PROCESS",
          },
          {
            detail: "Signal · Event · Metric",
            id: "data",
            index: "ENTITY · 03",
            title: "DATA",
          },
          {
            detail: "Order · Material · Quality",
            id: "product",
            index: "ENTITY · 04",
            title: "PRODUCT",
          },
        ],
        status: "SEMANTIC SYSTEM MODEL",
      },
      primaryAction: "View selected work",
      summary:
        "I specialize in smart factory systems across manufacturing operations and warehouse logistics, working from requirement discovery and architecture through full-stack implementation and delivery to turn complex field problems into practical, maintainable, and evolvable solutions.",
      title: "Understand the factory.\nSolve the complexity.\nBuild systems that work.",
    },
    about: {
      eyebrow: "01 · ABOUT",
      imageAlt: "Portrait of Guan Wei Su",
      paragraphs: [
        "I am a hands-on Systems Developer who also manages a development team. Starting with mechanics, controls, mechatronic integration, and digital manufacturing, I expanded into full-stack software, system architecture, and team leadership to solve problems across manufacturing operations, warehouse logistics, and application systems.",
        "When assessing a customer need, I first clarify the equipment, process, data, and operating context to identify the real problem and its constraints. I then apply the technical depth required for feasibility analysis, architecture, full-stack implementation, performance optimization, and delivery verification. My goal is not a concept that stops at a presentation, but a solution that can be built, operated, and maintained in the real world.",
        "I take every engineering stage seriously so that vague assumptions and unverified details do not become downstream risks. Continuous learning and genuine curiosity keep expanding my knowledge, tools, and judgment, helping me respond confidently to changing technologies and industry needs.",
      ],
      principles: [
        {
          index: "A",
          title: "Understand the field",
          description: "Start with equipment, processes, data, and operating context to find the problem that truly matters.",
        },
        {
          index: "B",
          title: "Implement end to end",
          description: "Carry the work from requirement assessment and architecture through full-stack implementation and verification.",
        },
        {
          index: "C",
          title: "Keep evolving",
          description: "Build for maintainability and growth while continuously learning to meet changing needs.",
        },
      ],
      profileCaption: "AUTOMATION · SOFTWARE · SYSTEMS",
      profileLabel: "PROFILE · 01",
      title: "Start from the field.\nBuild solutions people trust.",
    },
    experience: {
      currentLabel: "CURRENT",
      education: [
        {
          degree: "M.S. in Mechanical Engineering · System Control Group",
          detail: "Research focus: Adaptive Control of a Delta Robot",
          id: "ntust-master",
          institution: "National Taiwan University of Science and Technology",
          period: "2016 — 2018",
        },
        {
          degree: "Exchange Student Program",
          id: "esslingen-exchange",
          institution: "Hochschule Esslingen, Germany",
          period: "Mar 2016 — Aug 2016",
        },
        {
          degree: "B.S. in Mechanical Engineering",
          id: "ntust-bachelor",
          institution: "National Taiwan University of Science and Technology",
          period: "2012 — 2016",
        },
      ],
      educationTitle: "Education",
      eyebrow: "02 · EXPERIENCE",
      intro:
        "I built my field foundation through control research and digital manufacturing, then expanded into full-stack product development, system architecture, and team leadership to solve increasingly complex automation challenges.",
      roles: [
        {
          company: "Expetech Co., Ltd.",
          current: true,
          department: "Warehouse Core Development Department",
          description:
            "Leading warehouse core system development and technical decisions while remaining hands-on with architecture, critical feature implementation, and performance optimization. Also responsible for team management, resource allocation, risk analysis, and cross-functional coordination to ensure product quality and delivery.",
          id: "jayan-manager",
          period: "Sep 2024 — Present",
          role: "Manager",
        },
        {
          company: "Expetech Co., Ltd.",
          department: "Product Development Department",
          description:
            "Owned full-stack development and core implementation for automation software products, covering system architecture, cross-system integration, frontend and backend development, performance analysis, and optimization to build a maintainable and scalable product foundation.",
          id: "jayan-senior-engineer",
          period: "Aug 2022 — Aug 2024",
          role: "Senior Engineer",
        },
        {
          company: "Industrial Technology Research Institute (ITRI)",
          department: "Smart Machinery Technology Center · Digital Manufacturing Technology Division",
          description:
            "Contributed to digital manufacturing and smart machinery system development across electromechanical control, equipment communication, and system integration, turning shop-floor requirements into practical application software.",
          id: "itri-system-engineer",
          period: "Nov 2018 — Jul 2022",
          role: "Software System Engineer",
        },
      ],
      rolesTitle: "Experience",
      title: "Controls. Software. Leadership.\nThe range to deliver real solutions.",
    },
    skills: {
      credentials: [
        {
          date: "2021",
          issuer: "High Tech Institute, The Netherlands",
          title: "System Architect",
        },
        {
          date: "2021",
          issuer: "High Tech Institute",
          title: "Passive Damping for High Tech Systems",
        },
        { date: "2017", issuer: "TOEIC", title: "TOEIC 830" },
        {
          date: "2015",
          issuer: "National Instruments",
          title: "Certified LabVIEW Associate Developer",
        },
      ],
      credentialsTitle: "Credentials & learning",
      eyebrow: "03 · EXPERTISE",
      groups: [
        {
          index: "01",
          title: "Full-stack Engineering",
          description: "Building maintainable, scalable products from data models and backend services to operator interfaces.",
          items: [
            ".NET",
            "TypeScript",
            "React",
            "Vite",
            "Container",
            "Microservices",
            "SQL",
            "NoSQL",
          ],
        },
        {
          index: "02",
          title: "Automation Integration",
          description: "Understanding equipment, controls, communication, and both production and warehouse workflows so software solves real smart-factory problems.",
          items: [
            "System Integration",
            "Automation",
            "Fieldbus",
            "Motion Control",
            "Mechatronics",
          ],
        },
        {
          index: "03",
          title: "Architecture & Delivery",
          description: "Using architecture, performance analysis, risk awareness, and verification to support reliable delivery and long-term evolution.",
          items: [
            "Clean Architecture",
            "CI/CD",
            "Git",
            "Design Patterns",
            "VM Provisioning",
            "Windows / Linux Server",
          ],
        },
      ],
      patent: {
        date: "2020 · Taiwan",
        label: "Patent",
        title: "1704434 · Drilling System And Method Thereof",
      },
      title: "Cross-disciplinary knowledge.\nEngineering discipline.\nPractical decisions.",
    },
    research: {
      currentDescription:
        "Focused on edge deployment, model fine-tuning, and inference efficiency under constrained computing resources, with continuous validation through local models and a structured research workflow.",
      currentItems: ["Edge AI", "Fine-tuning", "Unsloth", "QLoRA", "LLM"],
      currentTitle: "LLM Application",
      eyebrow: "04 · AI RESEARCH",
      horizonDescription:
        "The current research focus extends into Physical AI, using NVIDIA Isaac Sim and the Omniverse ecosystem to explore Sim-to-Real and autonomous systems, with Ontology connecting equipment, processes, and knowledge through machine-readable semantics.",
      horizonItems: [
        "Physical AI",
        "NVIDIA Isaac Sim",
        "Sim-to-Real",
        "Ontology",
        "Autonomous Systems",
      ],
      horizonTitle: "Physical AI & Autonomous Systems",
      image: aiResearchNotebookImage,
      imageAlt: "Carousel showing an AI research notebook, local model management, and patent keyword analysis results",
      intro:
        "A current research direction independent from the language-model side project, exploring how AI can understand equipment, processes, and the physical world—and become deployable capability for future factories.",
      projectDescription:
        "A personal electronic research notebook that applies AI to patent keyword analysis while preserving research topics, model experiments, and analytical results in a form that can be organized, compared, and revisited over time.",
      projectLabel: "CURRENT SIDE PROJECT · 2026",
      projectTitle: "AI Research Notebook",
      secondaryProject: {
        description:
          "A private storage and retrieval space for personal knowledge assets, using layered access control with RAG, Harness, and AI Agent capabilities so governed content can be searched, understood, and applied securely.",
        items: ["Private Storage", "Access Control", "RAG", "Harness", "AI Agent"],
        label: "SIDE PROJECT · PRIVATE SYSTEM",
        title: "AI Drive",
      },
      statement:
        "The goal is not simply to add a model, but to build a complete path from field problems and shared semantics to model capability and system delivery—continuously evaluating how AI can reshape today's factories and tomorrow's architecture.",
      title: "Ongoing AI research.\nThe next factory blueprint.",
    },
    work: {
      eyebrow: "05 · SELECTED WORK",
      intro:
        "Only selected projects cleared for public viewing are shown here. They illustrate how I have connected controls, equipment, and software to turn research concepts and field requirements into working results. My current focus has expanded into warehouse core systems; related active projects and R&D work remain confidential and are not disclosed.",
      projects: [
        {
          category: "Smart Manufacturing",
          date: "Oct · 2021",
          description: "Integrated production equipment, manufacturing workflows, and operator interfaces into a traceable, collaborative smart manufacturing process.",
          id: "smart-manufacturing-integration",
          image: smartManufacturingImage,
          imageAlt: "Smart manufacturing warehouse management interface",
          tags: ["System Integration", "Automation", "MCS", "RMS"],
          title: "Smart Manufacturing Integration System",
        },
        {
          category: "Steel Automation",
          date: "Oct · 2021",
          description: "Unified equipment control, process logic, and human-machine operations to reduce the complexity of production and collaboration.",
          id: "stirrup-production-automation",
          image: stirrupProductionImage,
          imageAlt: "Automated stirrup production equipment in operation",
          tags: ["Control", "Manufacturing", "Integration"],
          title: "Automated Stirrup Production System",
        },
        {
          category: "Production Automation",
          date: "Dec · 2020",
          description: "Integrated multi-machine collaboration and production flow, advancing EDM from standalone operations into a coordinated automated line.",
          id: "edm-production-automation",
          image: edmProductionLineImage,
          imageAlt: "Automated EDM production line management interface",
          tags: ["Automation", "Production Line", "Integration"],
          title: "Automated EDM Production Line",
        },
        {
          category: "Industrial Networking",
          date: "Mar · 2020",
          description: "Implemented EtherCAT master communication, control, and system integration as a foundation for real-time equipment coordination.",
          id: "ethercat-master-development",
          image: ethercatImage,
          imageAlt: "EtherCAT master development interface",
          tags: ["EtherCAT", "C++", "Motion"],
          title: "Simple EtherCAT Master Development",
        },
        {
          category: "Precision Manufacturing",
          date: "Mar · 2019",
          description: "Combined control algorithms, mechatronics, and application software to turn precision machining research into an operable drilling system.",
          id: "carbon-fiber-drilling",
          image: carbonFiberDrillingImage,
          imageAlt: "Carbon-fiber drilling system test equipment",
          tags: ["Control", "Mechatronics", "Research"],
          title: "CFRP Drilling System",
        },
        {
          category: "Control Research",
          date: "Mar · 2016",
          description: "Completed adaptive control research and implementation for a two-degree-of-freedom robot, from modeling and algorithm design to physical validation.",
          id: "adaptive-robot-control",
          image: robotControlImage,
          imageAlt: "Two-degree-of-freedom robot control experiment",
          tags: ["Adaptive Control", "Robotics", "Matlab"],
          title: "Adaptive Control of a 2-DoF Robot",
        },
      ],
      title: "From research to smart factories.\nTurn concepts into working results.",
    },
    contact: {
      availability: "Open to smart factory, manufacturing and warehouse system integration, and software collaboration.",
      description:
        "If you are facing a manufacturing automation, smart warehousing, factory transformation, or complex system integration challenge, I am happy to clarify the field requirements, technical feasibility, and delivery risks with you to find a direction that can truly be implemented.",
      emailLabel: "Send an email",
      eyebrow: "06 · CONTACT",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      title: "Clarify complexity.\nDeliver what works.",
    },
    footer: {
      backToTop: "Back to top",
      lastUpdated: "Last updated: 2026/08/23",
      lastUpdatedIso: "2026-08-23",
    },
  },
}
