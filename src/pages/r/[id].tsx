import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "../../services/api";

const Redirect: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async() => {
      const { data } = await api.get(`/urls/${id}`)
      router.push(data.redirectUrl)
    })()
  }, [id, router])

  return (
    <p>Carregando...</p>
  )
}

export default Redirect;
