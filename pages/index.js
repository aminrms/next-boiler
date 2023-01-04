import HomeParent from "../components/layout/home/HomeParent";
import withAuth from "../utils/hoc/withAuth";

function Home({name}) {
  return (
    <HomeParent name={name} />
  )
}

export const getServerSideProps = async (context) => {
  const { name } = context.query;
  return {
    props: {
      id: name,
    },
  };
};

export default withAuth(Home);