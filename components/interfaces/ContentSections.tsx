import { Text, UnorderedList, Link as ChakraLink } from "@chakra-ui/react";
import ContentGroup from "components/ui/ContentGroup";
import ListItemWrap from "components/ui/ListItemWrap";
import { FC } from "react";

const ContentSections: FC = () => {
  return (
    <>
      <ContentGroup title="What I am doing">
        <Text>
          直感性の高さと自由度の高さを同時に満たすようなユーザーインターフェース(UI)のあり方をテーマにプロダクト開発に取り組んでいます。
        </Text>
        <Text>
          例えばエディタ系のようなソフトウェアでは、非常に多くの機能を持つので、それに伴いUIも複雑になります。
        </Text>
        <Text>
          これを解決する一般的な方法は、「機能を絞る」ことでしょう。これなら直感的で初心者でも使いやすくなりますが、この方法では自由度の高さにいずれ限界が生まれます。
        </Text>
        <Text>
          私が過去に作ったアプリケーションに{" "}
          <ChakraLink href="https://chokokucad.itta.dev" target="_blank">
            Chokoku CAD
          </ChakraLink>{" "}
          というものがあります。既存の3Dモデリングソフトは非常に多くの機能を持っていますが、Chokoku
          CADで必要なのは「削る」操作だけです。
        </Text>
        <Text>
          機能をうまく一般化することさえできれば、そこそこの自由度を維持しながら使いやすさを実現することができます。
        </Text>
        <Text>
          現在は、LLMによる自然言語ベースのUIとGUIの融合による「究極のUIの形」を目指したアプリケーションを開発しています...{" "}
          <ChakraLink href="#3">↓</ChakraLink>
        </Text>
      </ContentGroup>
      <ContentGroup title="Certificates / Awards">
        <UnorderedList>
          <ListItemWrap>基本情報技術者試験 (FE)</ListItemWrap>
          <ListItemWrap>英検２級</ListItemWrap>
          <ListItemWrap>
            U-22 プログラミング・コンテスト 2020 経済産業省商務政策局長賞
          </ListItemWrap>
          <ListItemWrap>
            U-22 プログラミング・コンテスト 2021 経済産業大臣賞
          </ListItemWrap>
        </UnorderedList>
      </ContentGroup>
    </>
  );
};

export default ContentSections;
