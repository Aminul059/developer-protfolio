if (self.CavalryLogger) { CavalryLogger.start_js(["DnnmnR8"]); }

__d("ProfileCometTimelineGridViewRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4006188272768812",metadata:{},name:"ProfileCometTimelineGridViewRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometTimelineGridViewFeedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4312087975519168",metadata:{},name:"ProfileCometTimelineGridViewFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FBPayConstants",[],(function(a,b,c,d,e,f){"use strict";a="/help/pay";b="/payments_terms";c="/facebook_pay";d="https://help.instagram.com/357872324807367";e=c+"/settings";var g=c+"/security",h=2078111,i=2078082;f.LINK_FBPAY_HELP_CENTER=a;f.LINK_FBPAY_TERMS=b;f.LINK_FBPAY_HUB=c;f.LINK_FBPAY_IG_HELP_CENTER=d;f.LINK_FBPAY_HUB_SETTINGS=e;f.LINK_FBPAY_HUB_SECURITY=g;f.ALT_PAY_FLOW_CANCELLED_ERROR_CODE=h;f.IDV_REQUIRED_ERROR_CODE=i}),66);
__d("ProfileCometTimelineGridViewRouteRoot.entrypoint",["JSResourceForInteraction","ProfileCometTimelineGridViewFeedQuery$Parameters","ProfileCometTimelineGridViewRootQuery$Parameters","WebPixelRatio","buildCometProfileRoute.entrypoint","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometProfileRoute.entrypoint")(c("JSResourceForInteraction")("ProfileCometTimelineGridViewRoot.react").__setRef("ProfileCometTimelineGridViewRouteRoot.entrypoint"),function(a){var b=a.routeProps.viewerID,e={gridMediaWidth:230,omitPinnedPost:!0,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"timeline",scale:d("WebPixelRatio").get(),userID:String(a.routeProps.userID)||""};a.routeProps.hasMentionsTab===!0&&(e=babelHelpers["extends"]({},e,{postedBy:{group:"OWNER"}}));return{queries:{timelineGridViewFeedQueryReference:{environmentProviderOptions:{actorID:b,ssrBoundary:"root"},parameters:c("ProfileCometTimelineGridViewFeedQuery$Parameters"),variables:e},timelineGridViewRootQueryReference:{environmentProviderOptions:{actorID:b,ssrBoundary:"root"},parameters:c("ProfileCometTimelineGridViewRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),shouldDeferAux:!c("gkx")("620"),shouldDeferGrid:!c("gkx")("620"),userID:String(a.routeProps.userID)||""}}}}});g["default"]=a}),98);