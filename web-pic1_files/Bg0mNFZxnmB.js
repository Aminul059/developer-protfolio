if (self.CavalryLogger) { CavalryLogger.start_js(["JOCCM5I"]); }

__d("FundraiserHubPopularSectionQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4638687799494527",metadata:{},name:"FundraiserHubPopularSectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserHubRaiseMoneySectionQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3969931456395654",metadata:{},name:"FundraiserHubRaiseMoneySectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserHubSuggestedNonprofitSectionQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3965729290215222",metadata:{},name:"FundraiserHubSuggestedNonprofitSectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserHubSuggestedPersonalSectionQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6395458757146966",metadata:{},name:"FundraiserHubSuggestedPersonalSectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserHubLeftRailNavMenuQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3886410818088500",metadata:{},name:"FundraiserHubLeftRailNavMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserHubLeftRailSectionsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4225053504185839",metadata:{},name:"FundraiserHubLeftRailSectionsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserPageCompoundRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3904368153014035",metadata:{},name:"FundraiserPageCompoundRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserPageContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4201174796592452",metadata:{},name:"FundraiserPageContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserPageSecondaryColumnContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4112227178845007",metadata:{},name:"FundraiserPageSecondaryColumnContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FundraiserPageHeaderContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4025666104218476",metadata:{},name:"FundraiserPageHeaderContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("MessengerKidsCometAppQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3361466770573924",metadata:{connection:[{count:null,cursor:null,direction:"forward",path:["viewer","actor","managed_neo_approved_users"]}]},name:"MessengerKidsCometAppQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildCometFundraiserHubRoute.entrypoint",["FundraiserHubLeftRailNavMenuQuery$Parameters","FundraiserHubLeftRailSectionsQuery$Parameters","JSResourceForInteraction","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("FundraiserHubRoot.react").__setRef("buildCometFundraiserHubRoute.entrypoint"),function(a){return{fundraiserHubLeftRailNavMenuQueryReference:{parameters:b("FundraiserHubLeftRailNavMenuQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},leftRailSectionsQueryReference:{parameters:b("FundraiserHubLeftRailSectionsQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}});g["default"]=a}),98);
__d("FundraiserHubExploreRoot.entrypoint",["FundraiserHubPopularSectionQuery$Parameters","FundraiserHubRaiseMoneySectionQuery$Parameters","FundraiserHubSuggestedNonprofitSectionQuery$Parameters","FundraiserHubSuggestedPersonalSectionQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometFundraiserHubRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometFundraiserHubRoute.entrypoint")(c("JSResourceForInteraction")("FundraiserHubExploreRoot.react").__setRef("FundraiserHubExploreRoot.entrypoint"),function(){return{queries:{fundraiserHubPopularSectionQueryReference:{parameters:b("FundraiserHubPopularSectionQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},fundraiserHubRaiseMoneySectionQueryReference:{parameters:b("FundraiserHubRaiseMoneySectionQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},fundraiserHubSuggestedNonprofitSectionQueryReference:{parameters:b("FundraiserHubSuggestedNonprofitSectionQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}},fundraiserHubSuggestedPersonalSectionQueryReference:{parameters:b("FundraiserHubSuggestedPersonalSectionQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("buildFundraiserPageCompoundRoute.entrypoint",["FundraiserPageCompoundRootQuery$Parameters","FundraiserPageHeaderContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("FundraiserPageCompoundRoot.react").__setRef("buildFundraiserPageCompoundRoute.entrypoint"),function(a){var c=a.routeProps,e=c.campaignID;c=c.source;var f=d("WebPixelRatio").get();return{fundraiserPageCompoundRootQueryReference:{parameters:b("FundraiserPageCompoundRootQuery$Parameters"),variables:{campaignID:e,donateRef:a.routeParams.donate_ref,source:"FUNDRAISER"}},fundraiserPageHeaderContainerQueryReference:{parameters:b("FundraiserPageHeaderContainerQuery$Parameters"),variables:{campaignID:e,prevSource:c,scale:f}}}});g["default"]=a}),98);
__d("FundraiserPageCompoundAllRoot.entrypoint",["FundraiserPageContentQuery$Parameters","FundraiserPageSecondaryColumnContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildFundraiserPageCompoundRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildFundraiserPageCompoundRoute.entrypoint")(c("JSResourceForInteraction")("FundraiserPageCompoundAllRoot.react").__setRef("FundraiserPageCompoundAllRoot.entrypoint"),function(a){var c,e=a.routeParams;a=a.routeProps;var f=a.campaignID,g=a.viewerIsOwner,h=d("WebPixelRatio").get();return{extraProps:babelHelpers["extends"]({},e),queries:{fundraiserPageContentQueryReference:{parameters:b("FundraiserPageContentQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"FundraiserPageActivityFeedQuery",campaignID:f,feedLocation:"FUNDRAISER_PAGE",feedbackSource:0,focusCommentID:(c=e.reply_comment_id)!=null?c:e.comment_id,prevSource:a.source,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"fundraiser_page",scale:h,viewerIsOwner:g}},fundraiserPageSecondaryColumnContainerQueryReference:{parameters:b("FundraiserPageSecondaryColumnContainerQuery$Parameters"),variables:{campaignID:f,scale:h}}}}});g["default"]=a}),98);
__d("MessengerKidsCometRoot.entrypoint",["JSResourceForInteraction","MessengerKidsCometAppQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{messengerKidsCometRootQueryReference:{parameters:b("MessengerKidsCometAppQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("MessengerKidsCometRoot.react").__setRef("MessengerKidsCometRoot.entrypoint")};g["default"]=a}),98);