import type { Language } from "../locales";

const en = {
  statistics: [
    { value: "20,000+", label: "Students & graduates", detail: "Connected to online higher education" },
    { value: "1,500+", label: "Direct connections", detail: "Students and graduates in SGAI’s direct network" },
    { value: "3", label: "Educational fields", detail: "Computer Science · Business · Health" },
  ],
  fields: [
    { title: "Computer Science", detail: "Technology & digital capability", icon: "code" },
    { title: "Business", detail: "Enterprise & administration", icon: "business" },
    { title: "Health", detail: "Health sciences & community wellbeing", icon: "health" },
  ],
  programs: [
    { id: "graduate-registry", title: "Syrian Graduate Registry", short: "Organize graduate information and educational backgrounds.", description: "A proposed protected registry bringing together academic profiles, employment status, location, and development needs to guide responsible support.", why: "Effective support begins with understanding graduates’ qualifications and the barriers they report.", activities: ["Register and verify students and graduates", "Collect academic and professional profiles", "Identify employment, education, and training gaps", "Produce impact reports for stakeholders"], outcome: "A reliable evidence base to guide programs and recognition dialogue." },
    { id: "career-development", title: "Graduate Career Development Program", short: "Build professional skills and career readiness.", description: "Structured career support to help graduates prepare for professional opportunities and sectors contributing to recovery.", why: "Academic learning needs to connect with the practical expectations of employers.", activities: ["Career counseling and professional guidance", "Support for relevant professional certifications", "Resume and interview preparation", "Internship and mentorship pathways"], outcome: "Graduates better equipped to pursue professional opportunities." },
    { id: "employment-partnerships", title: "Employment Partnership Network", short: "Connect graduates with professional opportunities.", description: "A proposed network connecting graduate talent with employers and organizations in technology, health, business, and related sectors.", why: "Employers need access to qualified talent and clearer information about online credentials.", activities: ["Outreach to companies, nonprofits, and international organizations", "Graduate recruitment events and talent showcases", "Sector-specific talent matching", "Employer awareness of online-learning credentials"], outcome: "Stronger links between graduate skills and employment opportunities." },
    { id: "postgraduate-pathways", title: "Postgraduate Education Pathways", short: "Expand access to further education.", description: "Cooperation with universities inside and outside Syria to explore postgraduate access and competency-based admissions.", why: "Graduates need routes to further study that can take account of their knowledge and skills.", activities: ["Identify universities open to skills-based admission", "Explore competency-based admissions processes", "Support scholarship and grant applications", "Develop accessible online and hybrid pathways"], outcome: "Expanded possibilities for postgraduate education, subject to university decisions." },
    { id: "graduate-leadership", title: "Graduate Leadership & Community Development", short: "Support alumni leadership and community development.", description: "Building a lasting graduate community through peer relationships, shared leadership, and contributions to community development.", why: "A connected community can extend the initiative’s impact beyond individual opportunities.", activities: ["Alumni engagement and peer networking", "Graduate-led community projects", "Constructive recognition advocacy", "A proposed annual Syrian Graduate Summit"], outcome: "A connected graduate community contributing to Syria’s future." },
  ],
  impact: [
    { period: "Near term", title: "Access & connection", description: "Organize information, strengthen the graduate community, and make career resources easier to reach." },
    { period: "Medium term", title: "Pathways & progress", description: "Develop employment, postgraduate, and institutional pathways with responsible partners." },
    { period: "Long term", title: "Contribution & recognition", description: "Support graduates to contribute through a sustainable and appropriate institutional framework." },
  ],
  strategy: [
    { title: "Document", text: "Graduate experiences and recognition barriers" },
    { title: "Organize", text: "Graduate information and needs" },
    { title: "Build", text: "Programs, resources, and digital infrastructure" },
    { title: "Connect", text: "Universities, nonprofits, employers, and institutions" },
    { title: "Demonstrate", text: "Need, feasibility, and institutional interest" },
    { title: "Long-term pathway", text: "Potential integration within an appropriate official educational framework" },
  ],
  currentWork: [
    { title: "Documenting", text: "Graduate experiences and qualification-recognition challenges", status: "Ongoing" },
    { title: "Developing", text: "Educational pathways and digital infrastructure", status: "In development" },
    { title: "Connecting", text: "Universities, nonprofits, employers, and international partners", status: "Ongoing" },
    { title: "Preparing", text: "Outreach and opportunities for Syrian students and graduates", status: "In development" },
  ],
  initiative: { label: "Current initiative", city: "Damascus", title: "Planned Graduate Gathering", description: "SGAI is preparing a gathering intended to bring students and graduates from different Syrian governorates to Damascus to raise awareness of qualification-recognition challenges.", statusLabel: "Status", status: "In planning", facts: [{ label: "Participants", value: "Students & graduates" }, { label: "Reach", value: "Multiple Syrian governorates" }, { label: "Location", value: "Damascus" }, { label: "Focus", value: "Educational qualification recognition" }], note: "Transportation funding and logistics are being organized. Updates and confirmed media coverage will be added when available." },
  partnershipCategories: [
    { title: "Academic partnerships", audience: "Universities & educational institutions", description: "Explore competency-based admissions, postgraduate pathways, scholarships, and academic cooperation.", connection: "Postgraduate Education Pathways" },
    { title: "Career & employment", audience: "Employers, technology & healthcare organizations", description: "Connect graduate talent with internships, mentorship, professional development, and employment opportunities.", connection: "Career Development & Employment Network" },
    { title: "Technical & program support", audience: "Nonprofits & specialist organizations", description: "Contribute expertise in technology, research, training, and organizational capacity.", connection: "Graduate Registry & Career Development" },
    { title: "Institutional collaboration", audience: "International organizations & educational authorities", description: "Work together on recognition research, constructive dialogue, and sustainable educational pathways.", connection: "Recognition dialogue & academic pathways" },
    { title: "Funding & development", audience: "Foundations & development organizations", description: "Explore appropriate institutional support for graduate development and proposed programs.", connection: "Responsible implementation across all five programs" },
  ],
  capabilities: [
    { title: "Partnerships & academic pathways", description: "International relations, university cooperation, postgraduate opportunities, scholarships, and resource development." },
    { title: "Research & credential support", description: "Graduate data, statistical analysis, document review, and academic-credential support." },
    { title: "Careers & community", description: "Employment development, alumni mentorship, field outreach, and volunteer coordination." },
    { title: "Communications & technology", description: "Media, design, translation, digital systems, and information security." },
    { title: "Governance & accountability", description: "Executive oversight, monitoring, responsible administration, advisory review, and professional ethics." },
  ],
  accountability: ["Regular program reporting and executive review", "Independent monitoring and evaluation", "Documented privacy and information-security controls", "Periodic reporting to partner institutions", "Advisory review of major strategic decisions"],
  barriers: [
    { title: "Further study", text: "Some graduates report barriers when seeking postgraduate opportunities." },
    { title: "Professional pathways", text: "Recognition questions can restrict access to regulated fields." },
    { title: "Employment", text: "Graduates may struggle to use their qualifications in relevant work." },
    { title: "Recognition clarity", text: "Online and distance-learning qualifications may lack a clear institutional pathway." },
  ],
  inquiryCategories: ["General inquiry", "Institutional partnership", "University partnership", "Media / storytelling", "Graduate support"],
  pathway: [
    { title: "Education", text: "Learning continues through online study.", type: "standard" },
    { title: "Graduation", text: "Qualifications are earned through sustained effort.", type: "standard" },
    { title: "Recognition barrier", text: "Graduates report uncertainty around online qualifications.", type: "barrier" },
    { title: "Limited pathways", text: "Further study and professional options can be restricted.", type: "barrier" },
    { title: "SGAI support", text: "Five programs connect evidence, skills, and institutions.", type: "support" },
    { title: "Opportunity", text: "The aim: work, further learning, and contribution.", type: "support" },
  ],
};

const ar: typeof en = {
  statistics: [
    { value: "+20,000", label: "طالب وخريج", detail: "مرتبطون بالتعليم العالي الإلكتروني" },
    { value: "+1,500", label: "تواصل مباشر", detail: "طلاب وخريجون ضمن شبكة التواصل المباشر لـ SGAI" },
    { value: "3", label: "مجالات تعليمية", detail: "علوم الحاسوب · الأعمال · الصحة" },
  ],
  fields: [
    { title: "علوم الحاسوب", detail: "التقنية والقدرات الرقمية", icon: "code" },
    { title: "الأعمال", detail: "ريادة الأعمال والإدارة", icon: "business" },
    { title: "الصحة", detail: "العلوم الصحية ورفاه المجتمع", icon: "health" },
  ],
  programs: [
    { id: "graduate-registry", title: "سجل الخريجين السوريين", short: "تنظيم معلومات الخريجين وخلفياتهم التعليمية.", description: "سجل محمي ومقترح يجمع الملفات الأكاديمية والحالة المهنية والموقع واحتياجات التطوير لتوجيه الدعم بمسؤولية.", why: "يبدأ الدعم الفعّال بفهم مؤهلات الخريجين والعوائق التي يبلّغون عنها.", activities: ["تسجيل الطلاب والخريجين والتحقق من بياناتهم", "جمع الملفات الأكاديمية والمهنية", "تحديد فجوات العمل والتعليم والتدريب", "إعداد تقارير أثر للجهات المعنية"], outcome: "قاعدة معلومات موثوقة لتوجيه البرامج والحوار حول الاعتراف." },
    { id: "career-development", title: "برنامج التطوير المهني للخريجين", short: "بناء المهارات المهنية والاستعداد لسوق العمل.", description: "دعم مهني منظّم يساعد الخريجين على الاستعداد للفرص والقطاعات التي تسهم في التعافي.", why: "ينبغي أن يرتبط التعلّم الأكاديمي بالتوقعات العملية لأصحاب العمل.", activities: ["الإرشاد المهني والتوجيه", "دعم الشهادات المهنية المناسبة", "إعداد السيرة الذاتية والمقابلات", "مسارات التدريب والإرشاد"], outcome: "خريجون أكثر استعداداً للسعي إلى فرص مهنية." },
    { id: "employment-partnerships", title: "شبكة شراكات التوظيف", short: "وصل الخريجين بالفرص المهنية.", description: "شبكة مقترحة تصل مواهب الخريجين بأصحاب العمل والمنظمات في التقنية والصحة والأعمال والقطاعات ذات الصلة.", why: "يحتاج أصحاب العمل إلى الوصول إلى كفاءات مؤهلة وفهم أوضح لمؤهلات التعليم الإلكتروني.", activities: ["التواصل مع الشركات والمنظمات غير الربحية والدولية", "فعاليات تعريف بالمواهب وفرص التوظيف", "مواءمة المواهب حسب القطاع", "تعزيز وعي أصحاب العمل بمؤهلات التعليم الإلكتروني"], outcome: "روابط أقوى بين مهارات الخريجين والفرص المهنية." },
    { id: "postgraduate-pathways", title: "مسارات الدراسات العليا", short: "توسيع الوصول إلى التعليم المتقدم.", description: "التعاون مع جامعات داخل سوريا وخارجها لاستكشاف الوصول إلى الدراسات العليا والقبول القائم على الكفاءة.", why: "يحتاج الخريجون إلى مسارات تتيح متابعة الدراسة مع مراعاة معارفهم ومهاراتهم.", activities: ["تحديد جامعات منفتحة على القبول القائم على المهارات", "استكشاف إجراءات قبول قائمة على الكفاءة", "دعم طلبات المنح", "تطوير مسارات إلكترونية وهجينة ميسّرة"], outcome: "توسيع إمكانات الدراسات العليا، مع بقاء قرارات القبول للجامعات." },
    { id: "graduate-leadership", title: "قيادة الخريجين وتنمية المجتمع", short: "دعم قيادة الخريجين وتنمية المجتمع.", description: "بناء مجتمع مستدام للخريجين عبر علاقات الأقران والقيادة المشتركة والإسهام في تنمية المجتمع.", why: "يمكن لمجتمع مترابط أن يوسّع أثر المبادرة إلى ما يتجاوز الفرص الفردية.", activities: ["إشراك الخريجين وبناء شبكات الأقران", "مشروعات مجتمعية يقودها الخريجون", "مناصرة بنّاءة للاعتراف بالمؤهلات", "قمة سنوية مقترحة للخريجين السوريين"], outcome: "مجتمع خريجين مترابط يسهم في مستقبل سوريا." },
  ],
  impact: [
    { period: "على المدى القريب", title: "وصول وتواصل", description: "تنظيم المعلومات وتقوية مجتمع الخريجين وتيسير الوصول إلى الموارد المهنية." },
    { period: "على المدى المتوسط", title: "مسارات وتقدّم", description: "تطوير مسارات للعمل والدراسات العليا والتعاون المؤسسي مع شركاء مسؤولين." },
    { period: "على المدى البعيد", title: "إسهام واعتراف", description: "دعم الخريجين للإسهام ضمن إطار مؤسسي مناسب ومستدام." },
  ],
  strategy: [
    { title: "نوثّق", text: "تجارب الخريجين وتحديات الاعتراف" },
    { title: "ننظّم", text: "معلومات الخريجين واحتياجاتهم" },
    { title: "نبني", text: "البرامج والموارد والبنية الرقمية" },
    { title: "نصل", text: "الجامعات والمنظمات وأصحاب العمل والمؤسسات" },
    { title: "نبرهن", text: "الحاجة والجدوى والاهتمام المؤسسي" },
    { title: "مسار بعيد المدى", text: "إمكان الاندماج ضمن إطار تعليمي رسمي مناسب" },
  ],
  currentWork: [
    { title: "التوثيق", text: "تجارب الخريجين وتحديات الاعتراف بالمؤهلات", status: "مستمر" },
    { title: "التطوير", text: "المسارات التعليمية والبنية التحتية الرقمية", status: "قيد التطوير" },
    { title: "بناء الروابط", text: "الجامعات والمنظمات وأصحاب العمل والشركاء الدوليون", status: "مستمر" },
    { title: "التحضير", text: "التواصل والفرص للطلاب والخريجين السوريين", status: "قيد التطوير" },
  ],
  initiative: { label: "مبادرة حالية", city: "دمشق", title: "تجمّع مخطّط للخريجين", description: "تعمل SGAI على الإعداد لتجمّع يهدف إلى جمع طلاب وخريجين من محافظات سورية مختلفة في دمشق، للفت الانتباه إلى تحديات الاعتراف بالمؤهلات التعليمية.", statusLabel: "الحالة", status: "قيد التخطيط", facts: [{ label: "المشاركون", value: "طلاب وخريجون" }, { label: "النطاق", value: "محافظات سورية متعددة" }, { label: "الموقع", value: "دمشق" }, { label: "المحور", value: "الاعتراف بالمؤهلات التعليمية" }], note: "يجري تنظيم تمويل النقل والترتيبات اللوجستية. وستُضاف التحديثات والتغطية الإعلامية المؤكدة عند توفرها." },
  partnershipCategories: [
    { title: "شراكات أكاديمية", audience: "الجامعات والمؤسسات التعليمية", description: "استكشاف القبول القائم على الكفاءة ومسارات الدراسات العليا والمنح والتعاون الأكاديمي.", connection: "مسارات الدراسات العليا" },
    { title: "المسار المهني والتوظيف", audience: "أصحاب العمل والمؤسسات التقنية والصحية", description: "وصل مواهب الخريجين بالتدريب والإرشاد والتطوير المهني وفرص العمل.", connection: "التطوير المهني وشبكة التوظيف" },
    { title: "الدعم التقني والبرامجي", audience: "المنظمات غير الربحية والمتخصصة", description: "تقديم الخبرة في التقنية والبحث والتدريب وبناء القدرات المؤسسية.", connection: "سجل الخريجين والتطوير المهني" },
    { title: "التعاون المؤسسي", audience: "المنظمات الدولية والجهات التعليمية", description: "التعاون في أبحاث الاعتراف والحوار البنّاء والمسارات التعليمية المستدامة.", connection: "حوار الاعتراف والمسارات الأكاديمية" },
    { title: "التمويل والتطوير", audience: "المؤسسات المانحة ومنظمات التنمية", description: "استكشاف دعم مؤسسي مناسب لتنمية الخريجين والبرامج المقترحة.", connection: "تنفيذ مسؤول للبرامج الخمسة" },
  ],
  capabilities: [
    { title: "الشراكات والمسارات الأكاديمية", description: "العلاقات الدولية والتعاون الجامعي والدراسات العليا والمنح وتنمية الموارد." },
    { title: "البحث ودعم المؤهلات", description: "بيانات الخريجين والتحليل الإحصائي ومراجعة الوثائق ودعم المؤهلات الأكاديمية." },
    { title: "المهن والمجتمع", description: "التطوير المهني وإرشاد الخريجين والتواصل الميداني وتنسيق المتطوعين." },
    { title: "التواصل والتقنية", description: "الإعلام والتصميم والترجمة والأنظمة الرقمية وأمن المعلومات." },
    { title: "الحوكمة والمساءلة", description: "الإشراف التنفيذي والمتابعة والإدارة المسؤولة والمراجعة الاستشارية والأخلاقيات المهنية." },
  ],
  accountability: ["تقارير برامج منتظمة ومراجعة تنفيذية", "متابعة وتقييم مستقلان", "ضوابط موثقة للخصوصية وأمن المعلومات", "تقارير دورية للمؤسسات الشريكة", "مراجعة استشارية للقرارات الاستراتيجية الكبرى"],
  barriers: [
    { title: "متابعة الدراسة", text: "يبلّغ بعض الخريجين عن عوائق عند السعي إلى الدراسات العليا." },
    { title: "المسارات المهنية", text: "قد تحد أسئلة الاعتراف من الوصول إلى المهن المنظمة." },
    { title: "العمل", text: "قد يواجه الخريجون صعوبة في توظيف مؤهلاتهم في عمل مناسب." },
    { title: "وضوح الاعتراف", text: "قد تفتقر مؤهلات التعليم الإلكتروني وعن بُعد إلى مسار مؤسسي واضح." },
  ],
  inquiryCategories: ["استفسار عام", "شراكة مؤسسية", "شراكة جامعية", "الإعلام وسرد القصص", "دعم الخريجين"],
  pathway: [
    { title: "التعليم", text: "يستمر التعلّم عبر الدراسة الإلكترونية.", type: "standard" },
    { title: "التخرّج", text: "تُكتسب المؤهلات بجهد متواصل.", type: "standard" },
    { title: "تحدي الاعتراف", text: "يبلّغ خريجون عن غموض يحيط بالمؤهلات الإلكترونية.", type: "barrier" },
    { title: "مسارات محدودة", text: "قد تضيق خيارات متابعة الدراسة والعمل المهني.", type: "barrier" },
    { title: "دعم SGAI", text: "تصل البرامج الخمسة بين المعلومات والمهارات والمؤسسات.", type: "support" },
    { title: "الفرصة", text: "الهدف: العمل والتعلّم والإسهام.", type: "support" },
  ],
};

export function getInstitutionData(language: Language) {
  return language === "ar" ? ar : en;
}
