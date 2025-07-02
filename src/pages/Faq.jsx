const faqs = [
  {
    question: "What is Artifact Tracker?",
    answer:
      "Artifact Tracker is a full-stack platform to upload, explore, and manage historical artifacts with community features."
  },
  {
    question: "How do I add a new artifact?",
    answer:
      "Once logged in, go to the 'Add Artifact' page and fill in the required information including name, era, description, and image."
  },
  {
    question: "Can I edit or delete my uploaded artifacts?",
    answer:
      "Yes. Visit 'My Artifacts' under your profile dropdown to manage your uploaded artifacts."
  },
  {
    question: "Is Artifact Tracker free to use?",
    answer:
      "Yes. Artifact Tracker is completely free for both viewing and contributing."
  },
  {
    question: "How is my data protected?",
    answer:
      "We use Firebase Authentication and follow best practices for storing and handling user data."
  }
];

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">{faq.question}</div>
            <div className="collapse-content text-gray-600">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
