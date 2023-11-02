// 添加一个组件来获取当前账户的 bnb 余额 （读）
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Text } from "@chakra-ui/react";
import { formatEther } from "@ethersproject/units";
import * as React from "react";

const BnbBalance = () => {
  const [ethBalance, setEthBalance] = useState<number | undefined>(undefined);
  const { account, active, library, chainId } = useWeb3React<Web3Provider>();
  const provider = library;

  useEffect(() => {
    console.log(active, account);
    if (active && account) {
      provider?.getBalance(account).then((result) => {
        setEthBalance(Number(formatEther(result)));
      });
    }
  });

  return (
    <div>
      {active ? (
        <Text fontSize="md" w="100%" my="2" align="left">
          BNB in account: {ethBalance?.toFixed(3)}{" "}
          {chainId === 97 ? "Test" : " "} BNB
        </Text>
      ) : (
        <Text fontSize="md" w="100%" my="2" align="left">
          BNB in account:
        </Text>
      )}
    </div>
  );
};

export default BnbBalance;
