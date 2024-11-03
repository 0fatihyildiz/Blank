export default {
    prefix: 'status',
    icons: {
        warning: {
            body: '<path d="M21.7063 17.7604L13.8573 4.08226C13.6694 3.75329 13.3988 3.48004 13.0727 3.29004C12.7467 3.10004 12.3767 3 12 3C11.6233 3 11.2533 3.10004 10.9273 3.29004C10.6012 3.48004 10.3306 3.75329 10.1427 4.08226L2.29373 17.7604C2.10305 18.0877 2.00172 18.46 2.00002 18.8396C1.99832 19.2191 2.09631 19.5923 2.28404 19.9214C2.47177 20.2504 2.74255 20.5235 3.06889 20.7129C3.39523 20.9024 3.76551 21.0014 4.14211 21H19.8579C20.2345 21.0014 20.6048 20.9024 20.9311 20.7129C21.2574 20.5235 21.5282 20.2504 21.716 19.9214C21.9037 19.5923 22.0017 19.2191 22 18.8396C21.9983 18.46 21.8969 18.0877 21.7063 17.7604ZM11.2856 10.2014C11.2856 10.0105 11.3609 9.82739 11.4949 9.69239C11.6288 9.55738 11.8105 9.48153 12 9.48153C12.1895 9.48153 12.3712 9.55738 12.5051 9.69239C12.6391 9.82739 12.7144 10.0105 12.7144 10.2014V13.801C12.7144 13.9919 12.6391 14.175 12.5051 14.31C12.3712 14.445 12.1895 14.5209 12 14.5209C11.8105 14.5209 11.6288 14.445 11.4949 14.31C11.3609 14.175 11.2856 13.9919 11.2856 13.801V10.2014ZM12 18.1204C11.7881 18.1204 11.5809 18.057 11.4047 17.9384C11.2285 17.8197 11.0911 17.6511 11.01 17.4538C10.9289 17.2564 10.9077 17.0393 10.9491 16.8298C10.9904 16.6204 11.0925 16.428 11.2423 16.2769C11.3922 16.1259 11.5831 16.0231 11.791 15.9814C11.9988 15.9397 12.2143 15.9611 12.4101 16.0429C12.6059 16.1246 12.7732 16.263 12.8909 16.4406C13.0087 16.6182 13.0715 16.8269 13.0715 17.0405C13.0715 17.3269 12.9586 17.6016 12.7577 17.8041C12.5567 18.0066 12.2842 18.1204 12 18.1204Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
        todo: {
            body: '<path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
        inprogress: {
            body: '<path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.86 12C3.86 16.4956 7.5044 20.14 12 20.14C16.4956 20.14 20.14 16.4956 20.14 12C20.14 7.5044 16.4956 3.86 12 3.86C7.5044 3.86 3.86 7.5044 3.86 12Z" fill="currentColor"/>\n<path d="M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6L12 12L12 18Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
        failed: {
            body: '<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9949 9.3494 20.9397 6.80881 19.0655 4.93455C17.1912 3.06028 14.6506 2.00508 12 2ZM11.2308 7.38461C11.2308 7.1806 11.3118 6.98495 11.4561 6.84069C11.6003 6.69643 11.796 6.61538 12 6.61538C12.204 6.61538 12.3997 6.69643 12.5439 6.84069C12.6882 6.98495 12.7692 7.1806 12.7692 7.38461V12.7692C12.7692 12.9732 12.6882 13.1689 12.5439 13.3132C12.3997 13.4574 12.204 13.5385 12 13.5385C11.796 13.5385 11.6003 13.4574 11.4561 13.3132C11.3118 13.1689 11.2308 12.9732 11.2308 12.7692V7.38461ZM12 17.3846C11.7718 17.3846 11.5487 17.3169 11.359 17.1902C11.1692 17.0634 11.0213 16.8832 10.934 16.6723C10.8467 16.4615 10.8238 16.2295 10.8683 16.0057C10.9128 15.7818 11.0227 15.5762 11.1841 15.4149C11.3455 15.2535 11.5511 15.1436 11.7749 15.0991C11.9987 15.0546 12.2307 15.0774 12.4416 15.1648C12.6524 15.2521 12.8326 15.4 12.9594 15.5897C13.0862 15.7795 13.1538 16.0026 13.1538 16.2308C13.1538 16.5368 13.0323 16.8303 12.8159 17.0467C12.5995 17.263 12.306 17.3846 12 17.3846Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
        done: {
            body: '<path d="M6.4443 3.6853C8.08879 2.58649 10.0222 2 12 2C14.6506 2.00508 17.1912 3.06028 19.0655 4.93455C20.9397 6.80881 21.9949 9.3494 22 12C22 13.9778 21.4135 15.9112 20.3147 17.5557C19.2159 19.2002 17.6541 20.4819 15.8268 21.2388C13.9996 21.9957 11.9889 22.1937 10.0491 21.8078C8.10929 21.422 6.32746 20.4696 4.92894 19.0711C3.53041 17.6725 2.578 15.8907 2.19215 13.9509C1.8063 12.0111 2.00433 10.0004 2.76121 8.17316C3.51809 6.3459 4.79981 4.78412 6.4443 3.6853ZM16.7617 10.2489C17.0691 9.95563 17.0806 9.46872 16.7873 9.16133C16.4941 8.85394 16.0072 8.84248 15.6998 9.13573L10.587 14.0134L8.30068 11.8285C7.99354 11.535 7.50662 11.546 7.2131 11.8532C6.91959 12.1603 6.93064 12.6472 7.23778 12.9407L10.0551 15.633C10.3522 15.917 10.8201 15.9172 11.1175 15.6335L16.7617 10.2489Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
        cancelled: {
            body: '<path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.745 9.41566 20.7162 6.93859 18.8888 5.11118C17.0614 3.28378 14.5843 2.25496 12 2.25ZM15.5344 14.4656C15.6752 14.6078 15.7542 14.7999 15.7542 15C15.7542 15.2001 15.6752 15.3922 15.5344 15.5344C15.391 15.673 15.1994 15.7505 15 15.7505C14.8006 15.7505 14.609 15.673 14.4656 15.5344L12 13.0594L9.53438 15.5344C9.39102 15.673 9.19942 15.7505 9 15.7505C8.80059 15.7505 8.60898 15.673 8.46563 15.5344C8.32479 15.3922 8.24578 15.2001 8.24578 15C8.24578 14.7999 8.32479 14.6078 8.46563 14.4656L10.9406 12L8.46563 9.53437C8.34603 9.38865 8.28491 9.20366 8.29416 9.01537C8.30341 8.82708 8.38236 8.64896 8.51566 8.51566C8.64896 8.38236 8.82708 8.3034 9.01537 8.29416C9.20366 8.28491 9.38866 8.34603 9.53438 8.46563L12 10.9406L14.4656 8.46563C14.6114 8.34603 14.7963 8.28491 14.9846 8.29416C15.1729 8.3034 15.351 8.38236 15.4843 8.51566C15.6176 8.64896 15.6966 8.82708 15.7058 9.01537C15.7151 9.20366 15.654 9.38865 15.5344 9.53437L13.0594 12L15.5344 14.4656Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
        backlog: {
            body: '<path d="M22.7906 14.1468L20.8286 13.7586C20.9409 13.1915 21 12.6036 21 12C21 11.3964 20.9409 10.8085 20.8286 10.2414L22.7906 9.85322C22.928 10.5475 23 11.2654 23 12C23 12.7346 22.928 13.4525 22.7906 14.1468ZM21.1472 5.88823L19.4853 7.00087C18.8276 6.01854 17.9815 5.17237 16.9991 4.51472L18.1118 2.85278C19.3113 3.65587 20.3441 4.68866 21.1472 5.88823ZM14.1468 1.20937C13.4525 1.07202 12.7346 1 12 1C11.2654 1 10.5475 1.07202 9.85322 1.20937L10.2414 3.17135C10.8085 3.05914 11.3964 3 12 3C12.6036 3 13.1915 3.05914 13.7586 3.17135L14.1468 1.20937ZM5.88823 2.85278L7.00087 4.51472C6.01854 5.17237 5.17237 6.01854 4.51472 7.00087L2.85278 5.88823C3.65587 4.68866 4.68866 3.65587 5.88823 2.85278ZM1.20937 9.85322C1.07202 10.5475 1 11.2654 1 12C1 12.7346 1.07202 13.4525 1.20937 14.1468L3.17135 13.7586C3.05914 13.1915 3 12.6036 3 12C3 11.3964 3.05914 10.8085 3.17135 10.2414L1.20937 9.85322ZM2.85278 18.1118L4.51472 16.9991C5.17237 17.9815 6.01854 18.8276 7.00087 19.4853L5.88823 21.1472C4.68866 20.3441 3.65587 19.3113 2.85278 18.1118ZM9.85322 22.7906L10.2414 20.8286C10.8085 20.9409 11.3964 21 12 21C12.6036 21 13.1915 20.9409 13.7586 20.8286L14.1468 22.7906C13.4525 22.928 12.7346 23 12 23C11.2654 23 10.5475 22.928 9.85322 22.7906ZM18.1118 21.1472L16.9991 19.4853C17.9815 18.8276 18.8276 17.9815 19.4853 16.9991L21.1472 18.1118C20.3441 19.3113 19.3113 20.3441 18.1118 21.1472Z" fill="currentColor"/>',
            width: 24,
            height: 24,
        },
    },
}
