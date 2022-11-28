export enum General {
  updateStartofDay = 'user/startOfTheDay',
  endOfTheDay = 'user/endOfTheDay',
  floatIn = 'user/floatInOperation',
  floatOut = 'user/floatOutOperation',
  paytype = 'utils/currencies',
  sleep = 'user/sleep',
  eodreport = 'report/eodreport',
  userPermission = 'user/userPermissions',
  settings = 'settings/settings',
  settingsUpdate = 'settings/settingsupdate',
  stationSettings = 'settings/stationsettings',
  stationSettingsUpdate = 'settings/stationsettingsupdate',
  // login='login?mode=dev',
  login = 'login',
  stationIpSetting = 'settings/station',
  stationIpSettingUpdate = 'settings/stationupdate',
  waiterLogin = 'waiterstation',
  logo = 'settings/logo',
}

export enum Table {
  getTables = 'utils/tables',
  updateTables = 'utils/tableStatus',
  getTableList = 'get/table',
  addTableList = 'add/table',
  updateTableList = 'update/table',
  deleteTableList = 'delete/table/',
}

export enum Item {
  getClass = 'menu/itemClass',
  getFamily = 'menu/itemFamily',
  getItems = 'menu/items',
  getCat = 'menu/posItemCategory',
  getSubCat = 'menu/posItemSubCategory',
  getPosItems = 'menu/posItems',
  // getFavorites = "menu/items?favorite=Y"
  getFavorites = 'menu/items?available=1&favorite=Y',
  getitemStrategyPrice = 'menu/itemStrategyPrice',
}

export enum Billing {
  createInvoice = 'order/invoiceNew',
  createNewInvoice = 'order/invoiceNew?invoice_type=new',
  updateInvoice = 'order/invoiceUpdate',
  itemDiscount = 'menu/itemDiscount',
  itemPromotions = 'menu/itemPromotions',
  getInvoiceId = 'order/invoiceById',
  getInvoiceList = 'order/invoiceList?invoice_type=S&completed=0&order_type=O|P&order_status=P|R|N',
  release_invoice = 'order/invoiceList?completed=0&hold=1',
  clearInvoiceHold = 'order/clearInvoiceHold',
  payment = 'payment/makePayment',
  subCard = 'utils/subcards',
}

export enum ConfigData {
  config = JSON.parse(localStorage.getItem('configData') || '{}'),
  userData = JSON.parse(localStorage.getItem('userData') || '{}'),
}

export enum Customer {
  getCustomerList = 'customer/customerList',
  createCustomer = 'customer/customerAdd',
  editCustomer = 'customer/customerUpdate',
  getPOSType = 'get/posType',
}

export enum Report {
  summary1 = 'report/summary1?from_date=01/12/2021&to_date=08/03/2022',
  summary2 = 'report/summary2?from_date=01/12/2021&to_date=08/03/2022',
  summary3 = 'report/subcards?from_date=01/12/2021&to_date=08/03/2022',
  orderReport = 'report/subcards?from_date=01/12/2021&to_date=08/03/2022',
  totalReport = 'report/subcards?from_date=01/12/2021&to_date=08/03/2022',
  standAloneReport = 'reports?reportType='
}
export enum Printer {
  section = 'printer/sections',
  sectionUpdate = 'printer/sectionupdate',
  printers = 'printer/printers',
  updatePrinter = 'printer/printerupload',
}

export enum userPermission {
  sale_invoice = 'D', //Not available for Waiter
  return_invoice = 'D',
  reload_invoice = 'D',
  float_in = 'D',
  float_out = 'D',
  item_void = 'A',
  void_all = 'A',
  open_drawer_box = 'D',
  reprint = 'D',
  item_search = 'A',
  hold_invoice = 'D',
  release_invoice = 'D',
  write_notes = 'A',
  change_qty = 'A',
  cancel_order = 'D',
  select_order = 'A',
  split_invoice = 'D',
  header_discount = 'D',
  link_item_with_notes = 'A',
  link_item_with_free_items = 'A',
  link_item_chargeable_items = 'A', //available for Waiter
}

export enum Vat {
  get = 'get/vat',
  getVatType = 'get/vat/type',
  addVat = 'add/vat',
  updateVat = 'update/vat',
}
export enum ItemCodeMask {
  get = 'get/itemmask/code',
  add = 'add/itemmask',
  update = 'update/itemmask',
  delete = 'delete/itemmask/',
}

export enum item {
  getItemClass = 'get/itemclass',
  getItemFamily = 'get/itemfamily',
  addItemClass = 'add/itemclass',
  addItemFamily = 'add/itemfamily',
  updateItemClass = 'update/itemclass',
  updateItemFamily = 'update/itemfamily',
  deleteItemClass = 'delete/itemclass/',
  deleteItemFamily = 'delete/itemfamily/',
}

export enum subcard {
  getsubcards = 'get/subcard',
  addsubcards = 'add/subcard',
  deletesubcards = 'delete/subcard/',
  updatesubcards = 'update/subcard',
}

export enum itemdefinition {
  getitemdefinition = 'get/itemdefinition',
  postitemdefinition = 'add/itemdefinition',
  deleteitemdefinition = 'delete/itemdefinition/',
  getdropdownvendor = 'get/dropdown/vendor/',
  getvendor = 'get/item/vendor/',
  getunit = 'chain/unit/table?chainCode=',
  updateitemdefinition = 'update/itemdefinition',
}

export enum section {
  getsection = 'get/section',
  addsection = 'add/section',
  sectionBasedItem = '/get/sectionitem/',
  updatesection = 'update/section',
  deletesection = 'delete/section/',
}

export enum unit {
  getUnits = 'get/units',
  addUnits = 'add/units',
  updateUnits = 'update/units',
  deleteUnits = 'delete/units/',
}

export enum unitChain {
  getUnitChain = 'get/unit/chain',
  addUnitChain = 'add/unit/chain',
  updateUnitChain = 'update/unit/chain',
  deleteUnitChain = 'delete/unitchain/',
  getUnitCode = 'get/unitCode',
  getUnitName = 'get/unitName',
}

export enum chainunits {
  getunitschain = 'get/chain/unit?code=',
}
export enum company {
  getCompany = 'get/company',
  updateCompany = 'update/company',
  getCurrency = 'get/currency',
  getVatDefault = 'get/vatdefault/taxcode',
}

export enum note {
  getNotes = 'get/notes',
  addNotes = 'add/notes',
  updateNotes = 'update/notes',
  deleteNotes = 'delete/notes/',
}

export enum openingBalance {
  getOpeningBalance ='opening/balance',
  addOpeningBalance = 'opening/balance',
  updateOpeningBalance = '/opening/balance',
  deleteOpeningBalance = 'opening/balance?vendor_code='
}

export enum Terminal {
  getTerminalList = 'get/terminal',
  addTerminalList = 'add/terminal',
  updateTerminalList = 'update/terminal',
  deleteTerminalList = 'delete/terminal/',
  getItemMenu = 'get/itemmenu',
}

export enum mainmenu {
  getMainMenu = 'get/mainmenu',
  addMainMenu = 'add/mainmenu',
  updateMainMenu = 'update/mainmenu',
  deleteMainMenu = 'delete/mainmenu/',
}

export enum submenu {
  getSubmenu = 'get/submenu',
  addSubmenu = 'add/submenu',
  updateSubmenu = 'update/submenu',
  deleteSubmenu = 'delete/submenu/',
}

export enum menuTemplate {
  getMenuTemplate = 'get/menutemplate',
  getmenuTemplateDetails = 'get/menutemplatedetail/',
  addMenuTemplate = 'add/menutemplate',
  updateMenuTemplate = 'update/menutemplate',
  deleteMenuTemplate = 'delete/menutemplate',
}

export enum area {
  getArea = 'area',
  addArea = '/add/area',
  getTable = 'table',
  getTableInfo = 'area/table?area_code=',
  getAreaTerminalInfo = '/area/terminal?code=',
  updateAreaTerminal = '/update/area/terminal',
  updateAreaTable = 'update/area/table',
  tableReset = 'reset?area_code=',
  deleteArea = 'area?area_code=',
}

export enum posSetting {
  setting = '/setting',
}

export enum userList {
  getUserList = '/user',
  getGroup = '/group',
  getEmployee = '/employee',
  addUserList = 'add/user',
  updateUserList = '/update/user',
  deleteUserList = 'user?user_id=',
}

export enum userRole {
  getPermissionAdmin = '/user/role?type=A',
  getPermissionTxn = '/user/role?type=T',
  getGroup = '/group',
  addUserRole = '/add/permission',
  updateUserRole = '/update/permission',
  deleteUserRoleItem = '/role?Group_id=',
  getEditDetails = '/role/permission?group_id=',
}

export enum barcode {
  getBarcode = 'get/barcode',
  addBarcode = 'add/Barcode',
  updateBarcode = 'update/Barcode',
  deleteBarcode = '/delete/barcode/',
  getItems = 'get/barcode/items',
  getItemUnits = 'get/item/unit',
  getItemTableUnits = 'get/item/table',
}

export enum vendorMaster {
  getVendor = 'get/vendor',
  addVendor = 'add/vendor',
  updateVendor = 'update/vendor',
  deleteVendor = 'delete/vendor/',
}

export enum linkItems {
  getLinkItems = 'get/link/item',
  getLinkNotes = 'menu/itemNotes',
  updateLinkItems = 'update/item',
  getItems = 'get/item',
}

export enum salesPricing {
  getsalesPricing = 'pricing',
  addsalesPricing = 'pricing',
  updatesalesPricing = 'pricing',
  deletesalesPricing = 'pricing',
}

export enum salesDiscount {
  getSalesDiscount = 'discount',
  addSalesDiscount = 'discount',
  updateSalesDiscount = 'discount',
  deleteSalesDiscount = 'discount',
}

export enum salesPromotion {
  getsalesPromotion = 'promotion',
  deletesalesPromotion = 'promotion',
  addsalesPromotion = 'promotion',
  updatesalesPromotion = 'promotion',
}

export enum debitNote {
  getDebitNote = '/debitnote',
  addDebitNote = '/add/debitnote',
  updateDebitNote = '/update/debitnote',
  getPoDetails = 'get/getPODetail?po_number=',
  getPo = 'get/vendorpo?vendor_id='
}

export enum creditNote {
  getCreditNote = '/get/creditnote',
  addCreditNote = '/add/creditnote',
  updateCreditNote = '/update/creditnote',
  getPo = '/get/creditnote/vendorpo?vendor_id=',
  getPoDetails = '/get/creditnote/getPODetail?po_number=',
}

export enum purchaseOrder {
  getPurchaseOrder = 'purchase/order',
  addPurchaseOrder ='purchase/order',
  getItem = 'item/purchase/order?po_number=',
  getBatch = 'get/batch',
  updatePurchaseOrder = 'purchase/order?po_number=',
  DeletePurchaseOrder='purchase/order?po_number=',
  unitChain='get/unit/'
}
export enum purchaseReturn{
  getPurchaseReturn ='purchase/return',
  addPurchaseReturn ='purchase/return',
  getItem = 'item/purchase/return?po_number=',
  getEdit = 'edit/purchase/return?po_number=',
  deletePurchaseReturn = 'purchase/return?po_number='
}
export enum EmployeeList {
  getEmployees = 'get/employees',
  addEmployees = 'add/employee',
  updateEmployees = 'update/employee',
  deleteEmployees = 'delete/employee/',
}
export enum region {
  getRegion = 'utils/regions',
  addRegion = 'add/region',
  updateRegion = 'update/region',
  deleteRegion = 'delete/region/',
}

export enum cityArea {
  getAddressArea = 'utils/areas',
  addAddressArea = 'add/addressArea',
  updateAddressArea = 'update/addressArea',
  deleteAddressArea = 'delete/addressArea/',
}

export enum strategyPricing {
  getStrategyPricing = 'get/salesStrategyPricing',
  getDetailTable = 'item/pricing?level_id=',
  getStrategyPriceList = 'get/strategypricingList',
  addStrategy = 'add/salesstrategypricing',
  updateStrategy = 'update/salesStrategypricing',
  deleteStrategy = ''
}
export enum strategy {
  getStrategy = '/get/strategypricingList',
  addStrategy = '/add/strategyPricing',
  updateStrategy = '/update/strategyPricing',
  deleteStrategy = '/delete/strategyPricing?id=',
}

export enum country {
  getCountry = 'utils/countries',
  addCountry = 'add/country',
  updateCountry = 'update/country',
  deleteCountry = 'delete/country/',
}

export enum city {
  getCity = 'utils/cities',
  addcity = 'add/city',
  updatecity = 'update/city',
  deletecity = 'delete/city/',
}

export enum stockCount {
  getStockCount = 'get/stock',
  getItems = 'get/stockItemList?id=',
  getQty = 'get/stockItem?PRODUCT_ID=',
  addStockCount ='add/stock',
  updateStockCount ='update/stock',
  deleteStockCount ='stock/count/'
}

export enum productSpec {
  getSpec = 'prodspec',
  addSpec = 'prodspec',
  editSpec = 'prodspec',
  specDetail = 'prodDetails?SpecNo=',
  deleteSpec = 'prodspec?SpecNo='
}

export enum stockUsage {
  getStock = 'stock',
  addStock = 'stock',
  editStock = 'stock',
  getItemPopup = 'item/stock',
  getBatch = 'item/batch?product_id=',
  editDetails = 'stock/details?stock_usage_id=',
  generateStock = 'generate/stock?transaction_date='
}

export enum vendorPayment{
  getVendorPayment = 'vendorpayment',
  getPO = 'po/payment/details?VendorCode=',
  addVendorPayment = 'vendorpayment',
  updateVendorPayment = 'vendorpayment',
  deleteVendor = 'vendorpayment?TransNo=',
  detailActivePO = 'view/payment?trans_no=',
  detailApprovePO = 'view/approve/payment?trans_no='
}
export enum vatOutReport {
  getVatReport = 'vatOut/report',
}

export enum vatInReport {
  getVatReport = 'vatIn/report'
}

export enum loyalty{
  getLoyaltyDetails = 'get/loyalty'
}

export enum invoice{
  getInvoiceList = 'allInvoices'
}
export enum CustomerManagement{

  getCustomerManagement = 'get/customer',
  addCustomerManagement = 'add/customer',
  updateCustomerManagement = 'update/customer',
  deleteCustomerManagement = 'delete/customer/',

}
export enum customerOpeningBalance{
  getCustomerOBList = 'get/customer/opening/balance',
  addCustomerOB = 'add/customer/opening/balance',
  getCustomerDropdown = 'get/customer',
  updateCustomerOB='update/customer/opening/balance',
  deleteCustomer = 'delete/customer/opening/balance?code='
}
export enum loyaltyProgram{
  getLoyaltyDetails = 'get/loyalty',
  updateLoyaltyDetails = 'update/loyalty'
}
// getCustomerDropdown = 'get/customer'

export enum customerPayment{
  getCustomerList = 'get/customer',
  customerPaymentList = 'get/customer/payment',
  customerInvoiceList = 'get/customer/invoice/details?customerCode=',
  add = 'add/customer/payment',
  update = 'update/customer/payment',
  delete = 'delete/customerpayment?TransNo=',
  viewDetails = 'get/customer/payment/details?TransNumber='
}
