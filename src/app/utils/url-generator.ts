export default class URLGenerator {

     URLGenerator(mainUrl, page , orderBy: {name , direction} , pageLength , pageFilter): string {
        return `${mainUrl}?$count=true&$filter=((IsActive eq true)${pageFilter ? " and (contains(tolower(Name),'" + pageFilter + "'))" : ''})${orderBy.name ? '&$orderby=' + orderBy.name : ''}${orderBy.direction === 'desc' ? ' desc' : ''}${page !== 1 ? '&$skip=' + pageLength * (page - 1) : ''}&$top=${pageLength} `;
      }
}
