"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  // Mocked environment variables
  const USER = process.env.NEXT_PUBLIC_USER;
  const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;

  const handleSubmit = async (values: { user: string; password: string }) => {
    if (values.user === USER && values.password === PASSWORD) {
      // Successful login logic, e.g., redirect to editor page
      router.push("/admin/blogAdmin");
    } else {
      // Handle incorrect credentials
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="mt-10 font-semibold text-spaceblue text-xl">
          Entre no modo editor do blog da CJR
        </h1>
        <Formik
          initialValues={{ user: "", password: "" }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors: Partial<typeof values> = {};
            if (!values.user) {
              errors.user = "Campo obrigatório";
            }
            if (!values.password) {
              errors.password = "Campo obrigatório";
            }
            return errors;
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="user"
                  className="block text-sm font-medium text-gray-700"
                >
                  Usuário
                </label>
                <Field
                  type="text"
                  id="user"
                  name="user"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300"
                  placeholder="Digite seu usuário"
                />
                <ErrorMessage
                  name="user"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Senha
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300"
                  placeholder="Digite sua senha"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-aquagreen/70 border border-transparent rounded-md py-2 px-4 inline-flex justify-center items-center text-white hover:bg-aquagreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0010.5 1h-1A1.5 1.5 0 008 2.5V4a8 8 0 014 7.062V11h2v2h-2v1.938A8 8 0 014 12zm8 7.938V20h-1.5A1.5 1.5 0 018 18.5V17H6v-2h2v-.938A8 8 0 0120 12a8 8 0 01-8 8zm8-9.938V4h-1.5A1.5 1.5 0 0012 5.5V7h-2V5.5A1.5 1.5 0 008.5 4H7a8 8 0 0116 0z"
                      ></path>
                    </svg>
                  ) : (
                    "Entrar"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
}
