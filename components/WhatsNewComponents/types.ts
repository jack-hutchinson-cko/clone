type NoticeableCallBackFunctionType = (e: {
  detail: {
    value: number;
  };
}) => void;

export type WindowWithNoticeableType = Window &
  typeof globalThis & {
    noticeable?: {
      render: (widget: string, id: string) => void;
      destroy: (widget: string, id: string) => void;
      on: (action: string, id: string, callBack: NoticeableCallBackFunctionType) => void;
    };
  };
