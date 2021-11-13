import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

export default function signIn({ providers }) {
  console.log("proivders", providers);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center  py-2 -mt-36 px-14 min-h-screen text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">A dummy clone app tried for learning</p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg p-3 bg-blue-500 text-white"
                onClick={() => SignIntoProvider(provider.id,{callbackUrl:'/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
