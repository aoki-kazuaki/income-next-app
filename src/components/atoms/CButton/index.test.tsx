import { TEST_TARGET_TEXT } from "@/constants/test/jestCommon";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CButton from ".";

describe("atoms/CButtonテスト", () => {
  it("childrenで渡したテキストが表示されていること", () => {
    render(<CButton>{TEST_TARGET_TEXT}</CButton>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(TEST_TARGET_TEXT);
  });

  it("与えらたクリックイベントが実行されていること", () => {
    const onClick = jest.fn();

    render(<CButton onClick={onClick}>{TEST_TARGET_TEXT}</CButton>);

    screen.getByRole("button").click();

    expect(onClick).toHaveBeenCalled();
  });
});
