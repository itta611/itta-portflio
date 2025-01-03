import { Text, Link as ChakraLink, List, HStack } from "@chakra-ui/react";
import ContentGroup from "components/ui/ContentGroup";
import ListItemWrap from "components/ui/ListItemWrap";
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
          特にエディタ系のようなソフトウェアでは、機能の量が多い分画面のどこに何があるのか分かりづらくなり、これが顕著になります。
        </Text>
        <Text>
          これを解決する最もシンプルな方法は「機能を絞る」ことですが、自由度の高さにいずれ限界が生まれます。
          私は、アプリケーションを構成する要素をうまく一般化して一つのものに集約すれば、そこそこの自由度を維持しながら使いやすさを実現することができると考えています。
        </Text>
        <Text>
          私が作った <ChakraLink href="#works">Chokoku CAD</ChakraLink>{" "}
          はこれを機能レベルで行うものでした。
        </Text>
        <Text>
          現在は、(広義の)
          UIという根本の概念から整理し、LLMによる自然言語ベースのUIとGUIの融合による柔軟な操作性を提供するアプリケーションを開発しています...{" "}
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
            description="開発中... XでときどきWIPを上げるかも"
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
