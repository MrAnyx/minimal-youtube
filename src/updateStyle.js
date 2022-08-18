console.log("Minigram style loaded 🎨");

// TODO Ajouter une condition sur l'url pour sélectionner les élément à cacher

const removeElement = (id) => {
   const element = document.getElementById(id);
   if (element) {
      element.remove();
   }
};

const addStyles = (id, css) => {
   removeElement(id);

   const head = document.querySelector("head");
   const style = document.createElement("style");
   style.id = id;
   style.textContent = `${css}`;
   head.appendChild(style);
};

const toggleFeedSuggestions = (feedSuggestions) => {
   switch (feedSuggestions) {
      case true:
         addStyles(
            "mg-feedSuggestions",
            `
            ._aak6._aak7._aak8._aak9._aaka, ._aakb._aakc._aakd, ._aak3, ._ab8b {
               display: none !important;
            }

            ._aam3 {
               margin-right: unset !important;
               max-width: unset !important;
            }

            ._aal- {
               max-width: unset !important;
            }

            ._aalz {
               max-width: 650px !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-feedSuggestions");
         break;
      default:
         break;
   }
};

const toggleFeedStories = (feedStories) => {
   switch (feedStories) {
      case true:
         addStyles(
            "mg-feedStories",
            `
            ._aac4._aac5._aac6._aac7 {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-feedStories");
         break;
      default:
         break;
   }
};

// const toggleFeedWidth = (feedSuggestions, feedWidth) => {
//    console.log("feed witdh");
//    addStyles(
//       "mg-feedWidth",
//       `
//       section._aalv._aalw._aalx._aaly._aalz._aal- {
//          max-width: ${feedWidth}px !important;
//          width: ${feedWidth}px !important;
//       }
//       `
//    );
// };

const toggleHeaderHome = (headerHome) => {
   switch (headerHome) {
      case true:
         addStyles(
            "mg-headerHome",
            `
            ._acun ._acuq._acur ._acut:nth-child(1) {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-headerHome");
         break;
      default:
         break;
   }
};

const toggleHeaderMessages = (headerMessages) => {
   switch (headerMessages) {
      case true:
         addStyles(
            "mg-headerMessages",
            `
            ._acun ._acuq._acur ._acut:nth-child(2) {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-headerMessages");
         break;
      default:
         break;
   }
};

const toggleHeaderPublish = (headerPublish) => {
   switch (headerPublish) {
      case true:
         addStyles(
            "mg-headerPublish",
            `
            ._acun ._acuq._acur ._acut:nth-child(3) {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-headerPublish");
         break;
      default:
         break;
   }
};

const toggleHeaderExplore = (headerExplore) => {
   switch (headerExplore) {
      case true:
         addStyles(
            "mg-headerExplore",
            `
            ._acun ._acuq._acur ._acut:nth-child(4) {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-headerExplore");
         break;
      default:
         break;
   }
};

const toggleHeaderLikes = (headerLikes) => {
   switch (headerLikes) {
      case true:
         addStyles(
            "mg-headerLikes",
            `
            ._acun ._acuq._acur ._acut:nth-child(5) {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-headerLikes");
         break;
      default:
         break;
   }
};

const toggleHeaderProfile = (headerProfile) => {
   switch (headerProfile) {
      case true:
         addStyles(
            "mg-headerProfile",
            `
            ._acun ._acuq._acur ._acut:nth-child(6) {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-headerProfile");
         break;
      default:
         break;
   }
};

const togglePostSideSection = (postSideSection) => {
   switch (postSideSection) {
      case true:
         addStyles(
            "mg-postSideSection",
            `
            ._ab8w._ab94._ab99._ab9h._ab9k._ab9p._abcm ._aata {
               display: none !important;
            }

            ._ab8w._ab94._ab99._ab9h._ab9k._ab9p._abcm ._aast {
               display: none !important;
            }

            ._ab8w._ab94._ab99._ab9h._ab9m._ab9p._abcm ._aast._aasu {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-postSideSection");
         break;
      default:
         break;
   }
};

const togglePostComments = (postComments) => {
   switch (postComments) {
      case true:
         addStyles(
            "mg-postComments",
            `
            ._aat6._aat7 ._ab8w._ab94._ab99._ab9f._ab9m._ab9p._abcm:not(:first-child) {
               display: none !important;
            }

            ._aamu._aat0._aat1 ._aamx {
               display: none !important;
            }

            ._aamu._aat0 ._aamx {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-postComments");
         break;
      default:
         break;
   }
};

const togglePostCommentWriting = (postCommentWriting) => {
   switch (postCommentWriting) {
      case true:
         addStyles(
            "mg-postCommentWriting",
            `
            section._aaoe._aaso._aasp {
               display: none !important;
            }

            section._aaoe._aaso {
               display: none !important;
            }

            ._aast ._aasx ._aat8, ._aasw ._aasx ._aat8 {
               margin-bottom: 14px !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-postCommentWriting");
         break;
      default:
         break;
   }
};

const togglePostShareIcon = (postShareIcon) => {
   switch (postShareIcon) {
      case true:
         addStyles(
            "mg-postShareIcon",
            `
            ._aamu._aat0._aat1 ._aamy {
               display: none !important;
            }

            ._aamu._aat0 ._aamy {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-postShareIcon");
         break;
      default:
         break;
   }
};

const togglePostLikeCount = (postLikesCount) => {
   switch (postLikesCount) {
      case true:
         addStyles(
            "mg-postLikesCount",
            `
            ._aasx ._aat4._aat5, ._aasx ._aat4 {
               display: none !important;
            }
            `
         );
         break;
      case false:
         removeElement("mg-postLikesCount");
         break;
      default:
         break;
   }
};

const injectAllChanges = (data) => {
   const {
      feedSuggestions,
      feedStories,
      // feedWidth,

      headerHome,
      headerMessages,
      headerPublish,
      headerExplore,
      headerLikes,
      headerProfile,

      postComments,
      postCommentWriting,
      postShareIcon,
      postLikesCount,
      postSideSection,
   } = data;
   toggleFeedSuggestions(feedSuggestions);
   toggleFeedStories(feedStories);
   // toggleFeedWidth(feedSuggestions, feedWidth);

   toggleHeaderHome(headerHome);
   toggleHeaderMessages(headerMessages);
   toggleHeaderPublish(headerPublish);
   toggleHeaderExplore(headerExplore);
   toggleHeaderLikes(headerLikes);
   toggleHeaderProfile(headerProfile);

   togglePostComments(postComments);
   togglePostCommentWriting(postCommentWriting);
   togglePostShareIcon(postShareIcon);
   togglePostLikeCount(postLikesCount);
   togglePostSideSection(postSideSection);
};

const constructNewData = (changes) => {
   const newValuesArray = Object.entries(changes).map((item) => {
      const itemKey = item[0];
      const itemValue = item[1]?.newValue;
      return { [itemKey]: itemValue };
   });

   const newChangesData = Object.fromEntries(
      newValuesArray.map((item) => {
         const itemKey = Object.keys(item)[0];
         const itemValue = Object.values(item)[0];
         return [itemKey, itemValue];
      })
   );

   return newChangesData;
};

chrome.storage.onChanged.addListener((changes) => {
   const newChangesData = constructNewData(changes);
   injectAllChanges(newChangesData);
});

const observe = () => {
   const observer = new MutationObserver((mutationsList) => {
      if (mutationsList.length) {
         chrome.storage.sync.get(["feedSuggestions", "feedStories" /* "feedWidth" */, "headerHome", "headerMessages", "headerPublish", "headerExplore", "headerLikes", "headerProfile", "postComments", "postCommentWriting", "postShareIcon", "postLikesCount", "postSideSection"], (data) => {
            injectAllChanges(data);
         });
      }
   });

   observer.observe(document.body, {
      childList: true,
      subtree: true,
   });
};

const init = () => {
   observe();
   chrome.storage.sync.get(["feedSuggestions", "feedStories" /* "feedWidth" */, "headerHome", "headerMessages", "headerPublish", "headerExplore", "headerLikes", "headerProfile", "postComments", "postCommentWriting", "postShareIcon", "postLikesCount", "postSideSection"], (data) => {
      injectAllChanges(data);
   });
};

init();
