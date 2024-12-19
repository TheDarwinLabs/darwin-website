type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};

const ERROR_MESSAGES: Record<number, string> = {
  10000: "System error",
  10001: "Wrong account email or password",
  10002: "User not login",
  10003: "Illegal parameter",
  10004: "Verification failed",
  10005: "Verification expired",
  10006: "Waiting for email verification",
  10007: "Verification code not found",
  10008: "The frequency of sending emails is too high. Please try again later",
  10009: "Wrong password",
  10010: "Illegal email address",
  10011: "User does not exist",
  10012:
    "The verification code has been used. Please resend the email for verification",
  10013: "The email address has been registered",
};

export const fetcher = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result: ApiResponse<T> = await response.json();

  if (result.code !== 0) {
    const errorMessage =
      ERROR_MESSAGES[result.code] || result.message || "Unknown error";
    throw new Error(errorMessage);
  }

  return result.data;
};
