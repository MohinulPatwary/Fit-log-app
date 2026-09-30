import DetailsPage from "@/app/Components/DetailsPage/DetailsPage";

const getGymCard = async (id) => {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching gym data:", error);
    return null;
  }
};

async function FitlogPage({ params }) {
  const { id } = await params;

  const CardDetails = await getGymCard(id);

  console.log(CardDetails);

  return (
    <div>
      <DetailsPage CardDetails={CardDetails}></DetailsPage>
    </div>
  );
}

export default FitlogPage;