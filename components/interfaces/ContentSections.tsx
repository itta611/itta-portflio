import {
  Text,
  Link as ChakraLink,
  Card,
  List,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Button } from "components/ui/button";
import ContentGroup from "components/ui/ContentGroup";
import ListItemWrap from "components/ui/ListItemWrap";
import NextImage from "next/image";
import Link from "next/link";
import { FC } from "react";
import ProjectCard from "../ui/ProjectCard";

const ContentSections: FC = () => {
  return (
    <>
      <ContentGroup title="What I am doing">
        <Text>
          直感性の高さと自由度の高さを同時に満たすようなユーザーインターフェース(UI)のあり方をテーマにプロダクト開発に取り組んでいます。
        </Text>
        <Text>
          私たちはUI自体の良し悪しにかかわらず、ソフトウェアを「使いづらい」「学習コストが高い」と感じることがあります。
          特にエディタ系のようなソフトウェアでは、非常に多くの機能を持つ分これが顕著になります。
        </Text>
        <Text>
          これを解決する一般的な方法は、「機能を絞る」ことでしょう。これなら直感的で初心者でも使いやすくなりますが、この方法では自由度の高さにいずれ限界が生まれます。
        </Text>
        <Text>
          私が作った <ChakraLink href="#works">Chokoku CAD</ChakraLink>{" "}
          がこれを機能レベルで行うものでした。
        </Text>
        <Text>
          機能をうまく一般化することさえできれば、そこそこの自由度を維持しながら使いやすさを実現することができます。
        </Text>
        <Text>
          現在は、LLMによる自然言語ベースのUIとGUIの融合による「究極のUIの形」を目指したアプリケーションを開発しています...{" "}
          <ChakraLink href="#works">↓</ChakraLink>
        </Text>
      </ContentGroup>
      <ContentGroup title="Certificates / Awards">
        <List.Root>
          <ListItemWrap>基本情報技術者試験 (FE)</ListItemWrap>
          <ListItemWrap>英検２級</ListItemWrap>
          <ListItemWrap>
            U-22 プログラミング・コンテスト 2020 経済産業省商務政策局長賞
          </ListItemWrap>
          <ListItemWrap>
            U-22 プログラミング・コンテスト 2021 経済産業大臣賞
          </ListItemWrap>
        </List.Root>
      </ContentGroup>
      <ContentGroup title="Works" id="works">
        <HStack flexWrap="wrap" alignItems="normal" gap={4}>
          <ProjectCard
            title="???"
            description="開発中... XでときどきWIPを上げるかも?"
            imageURL="/img/gen5-thumbnail.png"
            link="#"
          />
          <ProjectCard
            title="itta.dev"
            description="かっこかわいいを目指しながら更新中"
            imageURL="/img/itta-dev-thumbnail.png"
            link="https://chokokucad.itta.dev"
          />
          <ProjectCard
            title="Chokoku CAD"
            description="彫刻のように「削る」操作で造形する3Dモデリングソフト"
            imageURL="/img/chokokucad-thumbnail.png"
            link="#"
          />
        </HStack>
      </ContentGroup>
    </>
  );
};

export default ContentSections;
