export interface QuestionResponseI {
  questionId: number;
  title: string;
  content: string;
  createdAt: number;
  resolveStatus: "UNRESOLVED" | "RESOLVED";
  majorType: string;
}
export interface MemberResponseI {
  memberId: number;
  role: "USER" | "GUEST";
  email: string;
  socialType: "TRIM" | "GOOGLE" | "KAKAO" | "NAVER";
  nickname: string;
}
export interface AnswerResponseI {
  answerResponse: {
    content: string;
    questionId: number;
    createdAt: number;
  };
  memberResponse: MemberResponseI;
  storedAvatarResponse: AvatarResponseI;
}

export interface AvatarResponseI {
  backgroundColor: string;
  mouthForURL: string;
  eyesForURL: string;
  clothForURL: string;
  hairForURL: string;
}

export interface QuestionItemI {
  questionResponse: QuestionResponseI;
  memberResponse: MemberResponseI;
  storedAvatarResponse: AvatarResponseI;
  likeCount: number;
  answerCount: number;
  tagList: string[];
}

export interface QuestionResultI {
  questionResponseList: QuestionItemI[];
  page: number;
  totalPages: number;
}

export interface QuestionDataI {
  isSuccess: boolean;
  code: number;
  message: string;
  result: QuestionResultI;
}

export interface QuestionI {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    questionResponse: QuestionResponseI;
    memberResponse: MemberResponseI;
    answerDetailResponseList: AnswerResponseI[];
    storedAvatarResponse: AvatarResponseI;
    tagList: string[];
  };
}
