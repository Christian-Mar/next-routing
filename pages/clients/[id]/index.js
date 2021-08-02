import { useRouter } from "next/router";


function ClientProjectsPage() {
  const router = useRouter();

      function loadProjectHandler() {
      //load data...
      router.push({ //router.replace kan ook om te vervangen
          pathname: '/clients/[id]/[clientprojectid]',
          query: { id: 'max', clientprojectid: 'projecta' },
      });
         
    }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage;