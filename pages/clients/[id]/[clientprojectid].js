import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Project 1 of client A</h1>
    </div>
  );
}

export default SelectedClientProjectPage;