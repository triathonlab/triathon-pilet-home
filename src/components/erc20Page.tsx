
// 读合约  && 写合约

import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { Text } from "@chakra-ui/react";
import React from "react";
import erc20ABI from "../constants/abis/erc20.json"


export default function ReadERC20() {
  const addressContract = "0xa382e1dB43cc44BF9104DA89a5d794Fb5d38E560";
  const { account, active, library } = useWeb3React<Web3Provider>();
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [transferResult, setTransferResult] = useState();

  useEffect(() => {
    if (!(active && account && library)) return;
    try {
      const erc20: Contract = new Contract(addressContract, erc20ABI, library);
      const erc201 = new Contract(
        addressContract,
        erc20ABI,
        library.getSigner()
      );
      // 读 无参数
      erc20.symbol().then((result: any) => {
        setData(result);
      });
      //读 有参数  (获取余额)
      erc201.balanceOf(account).then((result: any) => {
        setData1(result.toString());
      });


      const accout1 = "0x15Dc00260AC96c935587c17C5cAF44D97075d321";
      const amount = 1000;
      // 写入  （都有参数）

      erc201
        .transfer(accout1, amount)
        .then((result: any) => {
          setTransferResult(result?.hash);
        })
        .catch((e: any) => {
          console.log(e, "=============");
        });
    } catch (e) {
      console.log("err", e);
    }
  }, [active]);

  return (
    <div>
      <Text>ERC20 Contract: {addressContract}</Text>
      <Text>acccout: {account}</Text>
      <br />
      <Text>以下是合约读取数据:</Text>
      <Text>name: {data}</Text>
      <Text>geon: {data1}</Text>
      <br />
      <Text>以下是合约发送交易获取的数据:</Text>
      <Text>交易hash : {transferResult}</Text>
    </div>
  );
}
