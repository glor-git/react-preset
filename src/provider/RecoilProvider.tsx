import React from "react";
import { RecoilRoot }from "recoil";

type Props = {
    children: React.ReactNode;
};

const RecoilProvider: React.FC<Props> = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

export default RecoilProvider;