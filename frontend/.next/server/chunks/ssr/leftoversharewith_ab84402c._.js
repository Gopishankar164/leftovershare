module.exports = [
"[project]/leftoversharewith/frontend/src/lib/requests.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestsApi",
    ()=>requestsApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/frontend/src/lib/api.ts [app-ssr] (ecmascript)");
;
const requestsApi = {
    // NGO actions
    create: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/requests', payload);
        return res.data;
    },
    getNGORequests: async (status, page = 1, limit = 10)=>{
        const params = new URLSearchParams();
        if (status && status !== 'all') params.append('status', status);
        params.append('page', page.toString());
        params.append('limit', limit.toString());
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/requests/ngo?${params}`);
        return res.data;
    },
    // Hotel actions
    getHotelRequests: async (status, page = 1, limit = 10)=>{
        const params = new URLSearchParams();
        if (status && status !== 'all') params.append('status', status);
        params.append('page', page.toString());
        params.append('limit', limit.toString());
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/requests/hotel?${params}`);
        return res.data;
    },
    updateStatus: async (id, status)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch(`/requests/${id}/status`, {
            status
        });
        return res.data;
    }
};
}),
"[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$requests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/frontend/src/lib/requests.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User2$3e$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript) <export default as User2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript) <export default as UtensilsCrossed>");
'use client';
;
;
;
;
const HotelRequestsPage = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('pending');
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [updatingId, setUpdatingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = async ()=>{
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$requests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestsApi"].getHotelRequests(statusFilter);
            setRequests(res.requests || []);
        } catch (e) {
            console.error('Failed to load hotel requests', e);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        statusFilter
    ]);
    const updateStatus = async (id, status)=>{
        try {
            setUpdatingId(id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$frontend$2f$src$2f$lib$2f$requests$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestsApi"].updateStatus(id, status);
            await load();
        } catch (e) {
            console.error('Failed to update request status', e);
            alert('Failed to update request');
        } finally{
            setUpdatingId(null);
        }
    };
    const getStatusPill = (status)=>{
        const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
        switch(status){
            case 'pending':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${base} bg-yellow-100 text-yellow-800`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "h-3 w-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                            lineNumber: 48,
                            columnNumber: 74
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                    lineNumber: 48,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'accepted':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${base} bg-green-100 text-green-800`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-3 w-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                            lineNumber: 50,
                            columnNumber: 72
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Accepted"
                    ]
                }, void 0, true, {
                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                    lineNumber: 50,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'rejected':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${base} bg-red-100 text-red-800`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "h-3 w-3 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                            lineNumber: 52,
                            columnNumber: 68
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Rejected"
                    ]
                }, void 0, true, {
                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                    lineNumber: 52,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${base} bg-gray-100 text-gray-800`,
                    children: status
                }, void 0, false, {
                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                    lineNumber: 54,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: "Loading incoming requests..."
            }, void 0, false, {
                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Incoming Requests"
                            }, void 0, false, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-gray-600",
                                children: "Review and accept or reject NGO requests"
                            }, void 0, false, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: statusFilter,
                            onChange: (e)=>setStatusFilter(e.target.value),
                            className: "rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "pending",
                                    children: "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "accepted",
                                    children: "Accepted"
                                }, void 0, false, {
                                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "rejected",
                                    children: "Rejected"
                                }, void 0, false, {
                                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            requests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No requests found."
                }, void 0, false, {
                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: requests.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: req.title
                                    }, void 0, false, {
                                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    getStatusPill(req.status)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mt-2 line-clamp-2",
                                children: req.description
                            }, void 0, false, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-2 text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
                                                className: "h-4 w-4 text-gray-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    req.foodType,
                                                    " • ",
                                                    req.quantity.amount,
                                                    " ",
                                                    req.quantity.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User2$3e$__["User2"], {
                                                className: "h-4 w-4 text-gray-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    req.ngoRequester.organizationName,
                                                    " • ",
                                                    req.ngoRequester.contactPerson
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-4 w-4 text-gray-500 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: req.ngoRequester.phone
                                            }, void 0, false, {
                                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            req.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: updatingId === req._id,
                                        onClick: ()=>updateStatus(req._id, 'accepted'),
                                        className: "px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50",
                                        children: updatingId === req._id ? 'Saving...' : 'Accept'
                                    }, void 0, false, {
                                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: updatingId === req._id,
                                        onClick: ()=>updateStatus(req._id, 'rejected'),
                                        className: "px-3 py-2 rounded-md text-sm font-medium text-red-700 bg-white border border-red-300 hover:bg-red-50 disabled:opacity-50",
                                        children: "Reject"
                                    }, void 0, false, {
                                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 117,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-xs text-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Requested on ",
                                        new Date(req.createdAt).toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, req._id, true, {
                        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/leftoversharewith/frontend/src/app/hotel/requests/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HotelRequestsPage;
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript)");
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
];
const CircleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-x", __iconNode);
;
 //# sourceMappingURL=circle-x.js.map
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript)");
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Phone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript)");
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>UserRound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "5",
            key: "1hypcn"
        }
    ],
    [
        "path",
        {
            d: "M20 21a8 8 0 0 0-16 0",
            key: "rfgkzh"
        }
    ]
];
const UserRound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user-round", __iconNode);
;
 //# sourceMappingURL=user-round.js.map
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript) <export default as User2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/user-round.js [app-ssr] (ecmascript)");
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>UtensilsCrossed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
            key: "n7qcjb"
        }
    ],
    [
        "path",
        {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
            key: "d0u48b"
        }
    ],
    [
        "path",
        {
            d: "m2.1 21.8 6.4-6.3",
            key: "yn04lh"
        }
    ],
    [
        "path",
        {
            d: "m19 5-7 7",
            key: "194lzd"
        }
    ]
];
const UtensilsCrossed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("utensils-crossed", __iconNode);
;
 //# sourceMappingURL=utensils-crossed.js.map
}),
"[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript) <export default as UtensilsCrossed>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UtensilsCrossed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$leftoversharewith$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/leftoversharewith/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=leftoversharewith_ab84402c._.js.map