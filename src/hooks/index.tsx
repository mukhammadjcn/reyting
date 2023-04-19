import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import {
  GetMemberConfig,
  GetNewsConfig,
  GetPublicNewsConfig,
} from "src/server/config/Urls";
import { ContextTypes, IMember, INews } from "src/types/index";

export const MainContext = React.createContext<ContextTypes>({
  total: 10,
  loading: true,
});

function MainContextProvider({ children }: { children?: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [total, setTotal] = useState(10);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<INews[]>([]);
  const [members, setMembers] = useState<IMember[]>([]);
  const [publicNews, setPublicNews] = useState<INews[]>([]);

  const urlMaker = () => {
    let url = "&";
    for (let key of searchParams.keys()) {
      let value = searchParams.get(key);
      url = url + `${url.length < 2 ? "" : "&"}${key}=${value}`;
    }
    return url.length > 2 ? url : "";
  };

  const GetPublicNews = async () => {
    const { data } = await GetPublicNewsConfig();
    setPublicNews(data.content);

    setTimeout(() => setLoading(false), 1500);
  };

  const GetNews = async () => {
    const { data } = await GetNewsConfig(urlMaker());
    setNews(data.content);
    setTotal(data?.totalElements);
  };

  const GetMembers = async () => {
    const { data } = await GetMemberConfig();
    setMembers(data);
  };

  useEffect(() => {
    GetNews();
  }, [searchParams.get("page")]);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") ?? "RU");
    GetPublicNews();
    GetMembers();
  }, []);

  return (
    <MainContext.Provider
      value={{
        news,
        total,
        loading,
        members,
        publicNews,
        setNews,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
