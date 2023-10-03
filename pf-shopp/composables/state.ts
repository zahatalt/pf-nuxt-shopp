// export function useCounter(initialValue : number) {
//   const count = ref(initialValue);
//   const inc = () => (count.value = count.value + 1);
//   const dec = () => (count.value = count.value - 1);
//   return {
//     count,
//     inc,
//     dec,
//   };
// }

// const user = useState<{ id: string, name: string, mail: string }>('login-user', () => {
//   console.log('retrieving user info...')
//   return {
//     id: '012345',
//     name: 'mamezou',
//     mail: 'nuxt-developer@mamezou.com'
//   };
// })

type productData = {
  id: string;
  title: string; 
  detail: string;
}
// export const useLoginUser = () =>
//   useState<productData>("login-user", () => {
//     return (
//       [
//         {
//           id:"1",
//           title: "削りたくなる鉛筆",
//           detail: '芯の周りに虹色のテープが巻かれており削ると虹が生まれます！\nついつい削りすぎてしまいそう。'
//         }
//       ]
//     );
//     ;
//   });