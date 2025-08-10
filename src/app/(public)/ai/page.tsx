import ChatForm from '@/components/modules/AI/ChatForm';

const AIPage = () => {
  return (
    <section>
      <div className="text-center max-w-lg mx-auto py-24">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-5">
          Chatting with AI
        </h1>
        <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-5">
          Know about Epidemiological Surveillance on maternal and child health related information
        </p>
      </div>
      <ChatForm />
    </section>
  );
};

export default AIPage;
