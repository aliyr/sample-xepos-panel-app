export default class UrlGenerator {

  generateTableURL(
    mainUrl,
    page,
    orderBy: { name; direction },
    pageLength,
    pageFilter
  ): string {
    const pageFilterString = pageFilter
      ? " and (contains(tolower(Name),'" + pageFilter + "'))"
      : "";
    const orderByName = orderBy.name ? "&$orderby=" + orderBy.name : "";
    const orderByDirectionString = orderBy.direction === "desc" ? " desc" : "";
    const pageLengthString =
      page !== 1 ? "&$skip=" + pageLength * (page - 1) : "";

    return (
      mainUrl +
      "?$count=true&$filter=((IsActive eq true)" +
      pageFilterString +
      ")" +
      orderByName +
      orderByDirectionString +
      pageLengthString +
      "&$top=" +
      pageLength
    );
  }
}
