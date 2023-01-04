import { useRouter } from "next/router";

const withAuth = (Component) => {

    const Auth = (props) => {
        const Router = useRouter();
        if (!localStorage.getItem('JWT')) {
            Router.replace("/login");
            return null;
        }
        return <Component {...props} />
    }

    return Auth
}

export default withAuth
