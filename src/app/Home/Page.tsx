import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { HomeDesc, homeDescs } from "../../constants";

export default function HomePage() {
  const navi = useNavigate();

  const HomeItem = useCallback(({ item }: ItemProps<HomeDesc>) => {
    return (
      <div className="flex flex-col gap-y-5 justify-center snap-start min-h-screen items-center sm:items-start ">
        <h1>{item.title}</h1>
        <p className="p">{item.subTitle}</p>
        <button
          className=" border"
          onClick={() => navi(`auth?target=${item.btnTitle}&content=기본정보`)}
        >
          {item.btnTitle}
        </button>
      </div>
    );
  }, []);

  return (
    <div className="px-5 snap-y snap-mandatory overflow-y-auto h-screen">
      {homeDescs.map((item, index) => (
        <HomeItem key={index} item={item} />
      ))}
    </div>
  );
}
