// JSON API response
const jsonResponse = (res: any, status: string, code: number, message: string, data: any) => {
  return res.status(code).json({ code, status, message, data });
};

// JSON API Success Response
export const SuccessResponse = (res: any, code: number, message: string, data: any) => {
  return jsonResponse(res, 'success', code, message, data)
}

// JSON API Failed Response
export const FailedResponse = (res: any, code: number, message: string, data: any) => {
  return jsonResponse(res, 'error', code, message, data);
}

// JSON API Server Error Response
export const ServerErrorResponse = (res: any, code: number=500, message: string, data: any) => {
  return jsonResponse(res, 'Internal Sever Error', code, message, data);
}

// export type ISystemR = {
//   success:boolean,
//   message: string,
//   data:  object
// }
// export const systemResponse = (success:boolean, message: string, data:  object): ISystemR => {
//   return { success, message, data };
// }