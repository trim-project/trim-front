import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import { KnowledgeItemI } from "../types/knowledgeType";
import { formatDate } from "../utils";
import { GoDotFill } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 480px;
  height: 300px;
  background-color: var(--color-white-gray);
  box-shadow: 0px 4px 14px 0px var(--color-item-shadow);
  padding: 25px;
  border-radius: 8px;
  cursor: pointer;

  & > div {
    display: flex;
  }
`;
const WriterSVG = styled.div`
  width: var(--font-size-extra-medium);
  height: var(--font-size-extra-medium);
  background: url("/assets/userSVG.svg") center/cover no-repeat;
`;
const Dot = styled(GoDotFill)``;
const MetaData = styled.div`
  align-items: center;
  color: var(--color-purple);
  font-size: var(--font-size-extra-small);
  gap: 10px;
  justify-content: flex-start;
`;
const Name = styled.div``;
const Major = styled.div``;
const CreatedAt = styled.div``;
const Title = styled.div`
  height: 30px;
  font-size: var(--font-size-medium);
  justify-content: flex-start;
`;
const Content = styled.div`
  height: 100px;
  font-size: var(--font-size-small);

  & > p {
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Types = styled.div`
  font-size: var(--font-size-extra-small);
  justify-content: space-between;
`;
const HashTags = styled.div`
  display: flex;
  gap: 10px;
`;
const Hash = styled.div`
  padding: 7px 10px;
  color: var(--color-gray);
  border-radius: 20px;
  background-color: var(--color-mint-hash);
  font-weight: 500;
`;
const LikeAndComment = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
const LikeIcon = styled(BiLike)`
  color: var(--color-like);
`;
const Like = styled.div`
  color: var(--color-like);
`;
const CommentIcon = styled(FaRegComments)`
  color: var(--color-comment);
`;
const Comment = styled.div`
  color: var(--color-comment);
`;

export default function Knowledgeitem({ data }: { data: KnowledgeItemI }) {
  const createdAt = formatDate(Object.values(data)[0].createdAt);
  const navigate = useNavigate();

  const major = {
    ENGINEERING: "공학",
    EDUCATION: "교육",
    SOCIAL_SCIENCES: "사회",
    ARTS_PHYSICAL_EDUCATION: "예체능",
    MEDICINE_PHARMACY: "의약",
    HUMANITIES: "인문",
    NATURAL_SCIENCES: "자연",
    ETC: "기타",
  };

  return (
    <ItemBox
      onClick={() =>
        navigate(`/knowledge/${data.knowledgeResponse.knowledgeId}`, {
          state: {
            id: data.knowledgeResponse.knowledgeId,
          },
        })
      }
    >
      <MetaData>
        <WriterSVG />
        <Name>{Object.values(data)[1].role}</Name>
        <Dot />
        <Major>
          {major[Object.values(data)[0].majorType as keyof typeof major]}
        </Major>
        <Dot />
        <CreatedAt>{createdAt}</CreatedAt>
      </MetaData>
      <Title>{Object.values(data)[0].title}</Title>
      <Content>
        <Markdown
          components={{ img: () => null, a: () => null, code: () => null }}
        >
          {Object.values(data)[0].content}
        </Markdown>
      </Content>
      <Types>
        <HashTags>
          {Object.values(data)[4].map((hash: string) => (
            <Hash># {hash}</Hash>
          ))}
        </HashTags>
        <LikeAndComment>
          <LikeIcon />
          <Like>{Object.values(data)[2]}</Like>
          <CommentIcon />
          <Comment>{Object.values(data)[3]}</Comment>
        </LikeAndComment>
      </Types>
    </ItemBox>
  );
}
