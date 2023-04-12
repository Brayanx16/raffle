import ListParticipant from "../../components/ListParticipant";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Form from "../../components/Form";

const Settings = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ListParticipant />
        <Footer />
      </section>
    </Card>
  );
};

export default Settings;
