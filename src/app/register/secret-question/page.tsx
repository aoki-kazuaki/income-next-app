import ContainerFillScreen from "@/components/molecules/ContainerFillScreen";
import ContainerFillScreenCard from "@/components/molecules/ContainerFillScreenCard";
import RegisterSecretQuestionForm from "@/components/organisms/RegisterSecretQuestion/Form";

const SecretQuestion = () => {
  return (
    <>
      <ContainerFillScreen>
        <ContainerFillScreenCard cardTitle="秘密の質問を入力">
          <RegisterSecretQuestionForm />
        </ContainerFillScreenCard>
      </ContainerFillScreen>
    </>
  );
};
export default SecretQuestion;
