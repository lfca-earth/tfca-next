export function createShareSvg({ color, message, names = null }) {
  return `
      <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="${color}"/>
      <circle cx="1151" cy="320" r="442" fill="black" fill-opacity="0.3"/>
      <g>
        <path d="M1062.8 388.534H1061.1L1062.4 381.311L1063.1 376.195L1063.2 375.192L1063.9 374.891L1064.8 375.693L1067.3 371.781L1068.4 371.681L1068.3 372.684H1069.3L1069 374.49L1067.7 377.198L1068.1 378.201L1067.2 380.509L1067.5 381.111L1066.5 384.421L1065.2 386.127L1064.1 386.327L1062.8 388.534V388.534Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1178.7 622.076L1183 630.502H1200V571.114H1199.2L1192.7 565.396L1193 561.082L1192.1 558.574L1192.5 553.759L1185.2 554.862L1182.3 557.27L1177.5 559.878L1176.4 561.784L1173.5 561.985L1169.3 561.383L1174.8 571.816L1173.7 573.923V578.537L1174 583.955L1172.1 587.165L1173.3 589.573L1172.2 591.78L1175.1 597.197L1172.2 604.119L1175.4 608.533L1176.6 613.147L1179.8 615.856L1178.7 622.076Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1200 571.113H1199.2L1192.7 565.395L1193 561.081L1192.1 558.573L1192.5 553.758L1185.2 554.862L1182.3 557.269L1177.5 559.878L1176.4 561.784L1173.5 561.984L1169.3 561.382L1166.1 562.486L1163.5 561.784L1163.4 552.053L1159 555.765L1154 555.664L1151.7 552.153L1147.9 551.852L1148.9 549.043L1145.6 545.131L1143 539.312L1144.5 538.209L1144.3 535.4L1147.7 533.594L1147 530.083L1148.4 527.876L1148.7 524.866L1155 520.452L1159.6 519.249L1160.4 518.245L1165.5 518.546L1167.7 500.89L1167.8 498.081L1166.9 494.47L1164.3 492.062L1164.4 487.347L1167.6 486.344L1168.7 487.046L1168.9 484.538L1165.6 483.836V479.823L1176.6 480.024L1178.5 477.717L1180.1 479.823L1181.1 483.636L1182.2 482.833L1185.3 486.244L1189.7 485.843L1190.8 483.836L1195 482.331L1197.4 481.228L1198.1 478.519L1200 477.516V475.008L1197.1 474.808L1196.4 470.695L1196.7 466.381L1194.2 464.776L1195.3 464.174L1200 464.976V475.008V477.516V571.113Z" fill="white" fill-opacity="0.24"/>
        <path d="M1200 477.516L1198.1 478.519L1197.4 481.228L1195 482.331L1190.8 483.836L1189.7 485.843L1185.3 486.244L1182.2 482.833L1181.1 483.636L1180.1 479.823L1178.5 477.717L1176.6 480.024L1165.6 479.823V483.836L1168.9 484.538L1168.7 487.046L1167.6 486.344L1164.4 487.347L1164.3 492.062L1166.9 494.47L1167.8 498.081L1167.7 500.89L1165.5 518.546L1160.4 518.245L1159.6 519.249L1155 520.452L1148.7 524.866L1148.4 527.876L1147 530.083L1147.7 533.594L1144.3 535.4L1144.5 538.209L1143 539.312L1145.6 545.131L1148.9 549.043L1147.9 551.852L1151.7 552.153L1154 555.664L1159 555.765L1163.4 552.053L1163.5 561.784L1166.1 562.486L1169.3 561.382L1173.5 561.984L1176.4 561.784L1177.5 559.878L1182.3 557.269L1185.2 554.862L1192.5 553.758L1192.1 558.573L1193 561.081L1192.7 565.395L1199.2 571.113H1200V477.516ZM1200 477.516V475.008M1200 475.008L1197.1 474.808L1196.4 470.695L1196.7 466.381L1194.2 464.776L1195.3 464.174L1200 464.976V475.008Z" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M947.4 179.37L944.3 180.273L938 177.464V175.257L935.1 173.05L935.4 171.244L931.1 170.14L931.7 166.73L933.2 165.325L937.3 166.629L939.7 167.633L943.8 168.234L944 170.441L944.4 173.351L947.6 175.959L947.4 179.37Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M926.5 144.359L928 145.162L933 144.66L925.8 151.582L926.1 156.598H924.2L923.5 153.789L924 150.88L923.2 148.974L924.5 146.265L926.5 144.359Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1200 93.7977L1193 96.707L1190 96.5063V95.0016L1195 92.293H1200V93.7977Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1196.2 79.1514L1197.1 76.6435L1194.3 76.2422L1189.2 81.3584L1185.6 85.8728L1179.9 88.6817L1186.2 88.1801L1185.5 91.4906L1193.7 88.5814L1200 85.4715L1200 79.2517L1198.9 78.2486L1196.2 79.1514Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1167.5 57.5827L1163.4 59.4887L1159.2 57.8836L1155.3 58.3852L1151.9 55.9776L1156.9 54.2722L1161.8 51.9648L1164.8 53.4696L1166.4 54.4728L1166.8 55.476L1167.5 57.5827Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1199.1 199.936L1200 199.634V133.224L1198.9 134.227L1191.4 138.441L1182.4 141.35L1184.1 144.56L1181.8 154.191L1176.2 160.611L1171.5 162.617L1167.1 156.699L1167 149.777L1168.7 143.657L1172.3 138.441L1167.5 137.839L1159.9 137.437L1156.3 134.929L1151.4 133.224L1149.7 130.415L1146.4 128.108L1139.4 125.5L1132.1 126.703L1132.9 122.089L1134.4 116.571L1128.4 115.568L1133.3 108.646L1138.3 104.031L1147.7 97.5106L1156.4 92.7957L1162.1 92.0935L1165 88.2814L1170.1 85.8737L1176.6 85.4724L1184.3 81.6603L1187.3 79.1524L1194.7 74.4374L1198 71.6285L1200 72.6945V64.7477L1193.9 68.017L1192.6 64.3052L1196.9 60.2925L1194.7 56.7814L1185.8 60.9947L1190.2 55.4772L1183.5 54.3737L1189.3 51.7654L1188.9 45.7463L1186.9 43.439L1182.4 42.5361L1174.2 46.3482L1168.7 52.267L1171.6 54.474L1173.2 57.7845L1166.8 63.3021L1163.6 63.1014L1157.4 67.5154L1161.7 62.2989L1156.8 60.4931L1152.3 61.396L1149.9 64.8068L1143.9 64.7065L1136.7 65.6094L1131.4 63.1014L1126.4 63.5027L1124.9 60.5935L1122.8 59.2893L1118.9 59.7909L1113.7 60.0919L1109.2 61.8976L1111.3 64.3052L1104.2 67.0138L1102.8 63.7033L1098.4 64.7065L1086.5 65.3084L1080.1 64.2049L1088.6 61.4963L1085.7 58.6874L1081.3 58.9884L1076.6 58.0855L1069.1 56.0791L1065.2 53.8721L1060.6 53.5712L1057.4 55.0759L1051.4 55.9788L1055.3 51.8657L1045.8 55.5775L1044.4 50.7622L1042.3 50.1603L1038.4 52.6683L1033.9 53.9724L1033.7 51.7654L1025.5 53.0696L1016.6 55.3769L1011.3 54.775L1004.3 56.4804L998 58.6874L994.3 58.1858L991 55.5775L985 54.2734L960.4 74.7384L924.8 107.542L929 107.743L931.8 109.348L932.3 111.957L932.6 115.769L940.2 112.458L946.7 110.552L946.1 113.662L946.9 116.07L948.5 118.778L947.4 122.992L946 129.914L950.6 133.726L947.4 137.538L942.3 140.447L939.8 143.657L941.9 148.071L938.8 152.987L942.9 155.695L939.3 159.407L938 164.925L945 167.533L946.6 170.242L952 176.361H952.7H966.8H981.5H986.3H1001.4H1016.1H1030.9H1045.8H1062.6H1079.6H1089.8L1091.1 173.953H1092.8L1091.9 177.364L1092.9 178.367L1096.2 178.769L1100.8 179.772L1104.7 181.678L1109.1 180.875L1114.5 182.581L1117.6 180.073L1120.9 179.07L1122.7 177.565L1124.2 176.762L1128.3 177.966L1131.6 178.167L1132.4 178.969L1132.5 182.581L1137.7 183.484L1136 185.289L1137.2 187.095L1135.3 189.503L1137.1 190.305L1135.2 192.412L1136.4 192.613L1137.8 191.71L1138.2 193.114L1141.6 193.917H1145.5L1149.3 194.619L1153.3 195.823L1154.2 197.829L1155.6 202.644L1153.2 204.751L1149.4 203.848L1148.3 199.936L1147.4 203.949L1143.6 207.46L1142.7 210.469L1141.6 212.275L1137.5 214.382L1133.8 217.893L1131.8 220.1L1134.5 220.501L1139.1 218.495L1142 216.689L1143.6 216.388L1146.2 216.99L1147.9 215.987L1150.7 215.184L1155.5 214.482L1155.8 212.576H1155.5L1153.8 212.977L1152 212.275L1154.3 210.168L1156.2 209.366L1160.1 208.463L1164.8 207.66L1166.6 208.764L1168.5 207.46L1170.5 206.557L1171.4 206.958V207.058L1178.2 202.644L1180.9 201.541L1188.7 201.441H1198L1199.1 199.936Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1114 36.3157L1109.3 38.7233L1119.8 37.2185L1122.4 39.8268L1129.7 37.1182L1131.5 38.8236L1129.3 43.9399L1133.6 41.8332L1136.4 36.5163L1140.7 35.7138L1143.7 36.5163L1145.9 38.623L1143.2 43.7392L1140.8 47.451L1145 50.0593L1150 52.6676L1147.4 54.9749L1140.3 55.4765L1141.1 57.4829L1137.9 59.4893L1131.2 58.6867L1125.5 57.1819L1120.4 57.4829L1110.9 59.3889L1099.6 60.1915L1091.7 60.6931L1092 58.0848L1087.9 56.6803L1083.6 57.2822L1083 52.9686L1086.3 52.3666L1093.6 51.4638L1099.1 51.7647L1105.3 50.7615L1098.8 49.5577L1089.7 49.959L1084 49.8587V47.9526L1095.7 45.7456L1089.4 45.8459L1084 44.4415L1091.8 40.5291L1097 38.4224L1111.2 35.3125L1114 36.3157Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1153.5 34.8112L1146.5 38.2221L1144.2 34.6106L1146.3 33.8081L1151.8 33.6074L1153.5 34.8112Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1171.9 32.6035L1175.5 33.707L1183.1 33.0048L1182.6 34.5096L1176.5 37.0175L1180.3 39.2245L1175.1 43.9395L1166.7 45.9459L1163.3 45.5446L1162.4 43.5382L1156.5 39.5255L1158.2 37.8201L1165.6 38.422L1164.7 35.1115L1171.9 32.6035Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1186.7 42.0343L1194.5 38.1219L1200.1 37.1187L1200 31.0996H1196.1L1190.9 32.5041L1186.7 34.7111L1184.1 37.219L1182.3 41.8337L1186.7 42.0343Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1078.7 45.3445L1065.2 47.9527L1065.8 45.6454L1059.8 42.8365L1064.2 40.6295L1071.7 36.8174L1079.3 33.4066L1079.7 30.2967L1093.7 29.4941L1097.9 30.5976L1107.4 30.8986L1109.3 32.3031L1110.9 34.5101L1104.4 35.8142L1090.5 39.4257L1081.3 43.1375L1078.7 45.3445Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1194.6 28.3912L1200 28.5915V24.0771L1195.9 24.8801L1191.4 27.0871L1194.6 28.3912Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1195.1 18.1572L1195.3 20.4646L1192.5 22.9725L1186.7 26.7846L1179.8 27.2862L1176.6 26.4837L1180 23.5744L1173.4 23.8754L1177.7 20.0633L1181.5 20.2639L1189.2 18.5585L1194.1 18.8595L1195.1 18.1572Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1155.7 20.7657L1155 22.4711L1159.4 21.6685L1163 21.8692L1160.7 24.3771L1155.6 26.6845L1141.7 27.487L1129.4 29.694L1123.4 29.7943L1124.9 28.1892L1135.6 25.8819L1117.7 26.4838L1113.5 25.581L1125.2 20.7657L1130.6 19.3612L1138.9 21.0666L1141.8 23.9759L1147.9 24.3771L1148.6 19.6622L1154.4 17.8564L1157.5 18.358L1155.7 20.7657Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1135.7 13.7441L1129.9 17.4559L1124.6 19.1613L1120.8 19.362L1110.9 21.4687L1103.8 22.2712L1100.2 21.1677L1111.9 17.4559L1124.1 14.346L1129.6 14.4464L1135.7 13.7441Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1158.1 13.4426L1149.3 14.8471L1146 13.3423L1151.1 11.8375L1157.1 11.3359L1161.2 12.0382L1158.1 13.4426Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1165.9 9.22948L1160.2 10.1323H1154.2L1155.2 9.43012L1160.9 8.12598L1162.6 8.32661L1165.9 9.22948Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1198.9 10.5339L1197.8 12.4399L1192.5 11.9383L1188.5 10.4335L1180.7 10.2329L1186 8.92877L1183.2 7.82526L1185.4 6.01953L1191.5 6.62144L1199 8.32685L1198.9 10.5339Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1159.4 415.018L1155.7 416.122L1154.1 419.332L1151.8 421.137L1150 423.545L1149.1 428.16L1147.3 431.972L1150.2 432.373L1150.8 435.282L1152 436.787L1152.3 439.295L1151.6 441.703L1151.7 443.107L1153.1 443.609L1154.3 445.816L1161.6 445.214L1164.9 446.016L1168.7 451.634L1171 450.932L1175.1 451.233L1178.3 450.531L1180.3 451.634L1179.1 455.045L1177.8 457.252L1177.2 461.867L1178.3 466.181L1179.8 468.087L1180 469.491L1177.1 472.701L1179.1 474.106L1180.6 476.413L1182.2 482.833L1181.1 483.636L1180.1 479.824L1178.5 477.717L1176.6 480.024L1165.6 479.824V483.837L1168.9 484.539L1168.7 487.047L1167.6 486.344L1164.4 487.348L1164.3 492.063L1166.9 494.47L1167.8 498.082L1167.7 500.891L1165.5 518.547L1162.6 515.136L1160.9 515.036L1164.4 508.415L1160 505.405L1156.6 506.007L1154.5 504.903L1151.4 506.609L1147.2 505.706L1143.7 498.985L1141.1 497.38L1139.3 494.27L1135.5 491.26L1134 491.862L1131.6 490.357L1128.8 488.251L1127.2 489.254L1122.4 488.351L1121 485.542L1119.9 485.642L1114.3 482.031L1113.6 480.024L1115.7 479.523L1115.5 476.313L1116.9 473.905L1119.7 473.504L1122.2 469.491L1124.4 466.08L1122.4 464.575L1123.6 460.864L1122.5 454.945L1123.8 453.239L1123.1 447.822L1120.9 444.311L1121.8 441.201L1123.6 441.703L1124.7 439.797L1123.6 435.985L1124.3 435.082L1127.2 435.282L1131.7 430.768L1134.1 430.066L1134.2 427.959L1135.6 422.442L1139 419.532L1142.5 419.332L1143.1 418.028L1147.5 418.529L1152.1 415.319L1154.4 413.915L1157.3 410.805L1159.3 411.206L1160.6 412.911L1159.4 415.018V415.018Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1089.6 420.435L1090.8 423.946L1092.8 426.554L1095.3 429.263L1093.1 429.865L1093 432.473L1094.1 433.376L1093.2 434.178L1093.4 435.282L1092.8 436.586L1092.5 437.89L1089.5 436.486L1088.4 435.081L1089.1 433.978L1089 432.573L1087.5 431.068L1085.3 429.764L1083.5 428.962L1083.2 427.056L1081.8 425.952L1082 427.758L1080.8 429.363L1079.6 427.557L1077.9 426.855L1077.2 425.651L1077.3 423.645L1078.2 421.638L1076.7 420.736L1078.1 419.431L1079 418.629L1082.6 420.334L1083.9 419.532L1085.7 420.033L1086.5 421.338L1088.2 421.839L1089.6 420.435V420.435Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1119.8 344.294L1121.7 346.602L1126.9 345.899L1128.7 347.404L1132.9 351.417L1136.1 354.326L1137.9 354.226L1141.1 355.53L1140.5 357.336L1144.5 357.637L1148.4 360.245L1147.6 361.75L1143.8 362.552L1140 362.853L1136.3 362.352L1128.2 362.953L1132.4 359.442L1130.3 357.737L1126.7 357.336L1125 355.43L1124.2 351.818L1121 352.019L1116 350.313L1114.5 348.909L1107.4 347.906L1105.6 346.702L1107.9 345.097L1102.5 344.796L1098.1 348.106L1095.8 348.207L1094.8 349.812L1092 350.514L1089.7 349.812L1092.9 347.906L1094.4 345.498L1097.1 344.094L1100.1 342.89L1104.4 342.288L1105.8 341.485L1110.5 341.987L1114.9 342.087L1119.8 344.294V344.294Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1160.7 374.69L1161 372.884L1159.7 370.978L1161.2 369.875L1161.9 367.367L1161.8 363.956L1162.6 362.853H1166.9L1170.1 364.458L1171.6 364.357L1172.3 366.665L1175.4 366.464L1175 368.37L1177.5 368.671L1180 370.978L1177.7 373.587L1175.1 372.182L1172.5 372.483L1170.7 372.182L1169.6 373.386L1167.4 373.787L1166.7 372.182L1164.8 373.085L1162.1 377.499L1160.8 376.496L1160.7 374.69V374.69Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1134 491.861L1134.8 496.777L1133.1 500.89L1127 507.712L1120.3 510.22L1116.9 515.838L1116 520.151L1112.9 522.86L1110.4 519.549L1108.1 518.847L1105.8 519.349L1105.5 517.041L1107.1 515.537L1106.4 512.828L1109.3 508.013L1108 505.204L1105.9 508.213L1102.4 505.304L1103.5 503.498L1102.5 497.68L1104.5 496.677L1105.5 492.664L1107.6 488.551L1107.3 485.943L1110.4 484.538L1114.3 482.03L1119.9 485.642L1121 485.541L1122.4 488.35L1127.2 489.253L1128.8 488.25L1131.6 490.357L1134 491.861V491.861Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1063.1 376.195L1062.4 381.311L1061.1 388.534H1062.8L1064.5 389.738L1065.1 388.735L1066.6 389.537L1063.8 392.045L1060.9 393.851L1060.4 395.055L1060.7 396.359L1059.4 397.964L1058 398.365L1058.3 399.168L1057.1 399.87L1055.1 401.475L1054.8 402.378L1052 401.275L1048.5 401.174L1046.1 399.87L1043.3 397.262L1043.7 395.356L1044.5 393.851L1043.8 392.647L1047.1 387.431H1054.3L1054.7 385.224L1053.9 384.822L1053.4 383.418L1051.5 381.913L1049.7 379.807L1052.2 379.706L1052.7 376.095H1057.9L1063.1 376.195Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1094.6 394.251L1092.7 394.151L1091.8 395.054L1089.8 395.857H1088.4L1087.1 396.659L1086 396.458L1085.1 395.455L1084.5 395.656L1083.6 397.161L1083.1 397.06L1082.9 398.465L1080.8 400.17L1079.6 400.973L1079 401.775L1077.5 400.471L1076.1 402.177H1074.9L1073.6 402.277L1073.4 405.487H1072.6L1071.8 406.992L1070 407.293L1069.2 405.286L1067.5 404.685L1068.2 402.076L1067.5 401.374L1066.3 400.973L1063.8 401.675L1063.7 400.872L1062.1 399.769L1061 398.565L1059.4 397.963L1060.7 396.358L1060.4 395.054L1060.9 393.85L1063.8 392.044L1066.6 389.536L1067.2 389.837L1068.5 388.734L1070.1 388.634L1070.6 389.135L1071.5 388.834L1074.1 389.436L1076.7 389.236L1078.5 388.533L1079.3 387.831L1081 388.132L1082.3 388.533L1083.8 388.433L1085 387.831L1087.5 388.734L1088.3 388.935L1089.9 390.138L1091.4 391.543L1093.3 392.546L1094.6 394.251V394.251Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1161.8 363.955L1161.9 367.366L1161.2 369.874L1159.7 370.978L1161 372.884L1160.7 374.69L1157.1 373.586L1154.4 373.987L1151 373.586L1148.3 374.79L1145.5 372.784L1146.2 370.677L1151.3 371.58L1155.4 372.081L1157.6 370.677L1155.3 367.868L1155.7 365.36L1152.2 364.357L1153.7 362.651L1157.1 362.852L1161.8 363.955V363.955Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1131.5 375.793L1129.7 376.897L1126.7 375.793L1123.8 373.486L1124.6 371.981L1127 371.58L1128.3 371.781L1132 372.383L1134.7 373.887L1135.5 375.693L1131.5 375.793V375.793Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1024.3 324.431L1026.5 324.23L1023.3 329.948L1021.5 334.563L1019.7 343.19L1018.6 346.3L1019 349.811L1020.3 353.021L1020.7 357.937L1023.7 362.752L1024.5 366.464L1026.2 369.574L1031.9 371.279L1033.8 373.988L1039 372.182L1043.3 371.58L1047.7 370.376L1051.3 369.273L1055.2 366.665L1057 362.953L1058.2 357.536L1059.4 355.63L1063.4 353.924L1069.5 352.419L1074.4 352.72L1077.8 352.118L1079 353.523L1078.4 356.633L1074.9 360.445L1073.1 364.357L1074 365.461L1072.8 368.27L1070.7 373.286L1069.5 371.58L1068.4 371.681L1067.3 371.781L1064.8 375.693L1063.9 374.891L1063.2 375.192L1063.1 376.195L1057.9 376.095H1052.7L1052.2 379.706L1049.7 379.806L1051.5 381.913L1053.4 383.418L1053.9 384.822L1054.7 385.224L1054.3 387.431H1047.1L1043.8 392.647L1044.5 393.851L1043.7 395.356L1043.3 397.262L1037.7 390.34L1035.1 388.233L1030.7 386.528L1027.5 387.029L1022.7 389.437L1019.8 390.039L1016.1 388.333L1012 387.13L1007.2 384.22L1003.1 383.318L997.2 380.308L992.9 377.198L991.8 375.493L988.7 375.091L983.3 373.085L981.4 370.176L976 366.464L973.8 362.451L973 359.241L974.9 358.639L974.6 356.833L976.2 355.128L976.6 352.921L975.1 350.012V347.504L973.8 344.193L970 337.773L965.4 332.757L963.5 328.744L959.4 326.136L958.7 324.531L960.4 320.619L958 319.114L955.5 315.904L955.3 311.49L952.5 310.888L950.2 307.577L948.5 304.367L948.8 302.361L947.3 297.545L947 292.63L947.8 290.122L944.7 287.513L942.8 287.814L940.4 286.109L938.6 288.717L938.5 291.727L937.5 296.642L938.5 299.251L941.3 303.665L941.7 305.27L942.4 305.671L942.5 307.878L943.5 307.778V311.991L944.8 313.596L945.3 315.904L948 319.114L948.4 325.133L949.4 327.942L950.3 330.951L950 334.362L952.6 334.563L954.2 337.472L955.7 340.381L955.4 341.585L952.6 343.892H951.6L950.9 339.98L948 336.268L944.6 333.158L942.1 331.553L943.3 326.838L943.2 323.327L941.1 321.321L938 318.512L937.1 319.314L936.1 317.609L933.1 316.104L930.9 312.292L931.4 311.891L933.5 312.192L936.2 309.784L937.2 306.875L934.3 302.26L931.7 300.555L930.9 296.542L930.3 292.228L929.5 287.112L929.3 281.294L935.6 280.792L942.7 280.09L941.8 281.394L948.8 284.504L959.7 289.018H970.5H974.8L975.6 286.31H985L986.3 288.617L988.4 290.724L990.8 293.533L991.6 296.843L992 300.454L994.3 302.361L998.3 304.267L1003.1 299.251L1007.6 299.05L1010.8 301.658L1012.4 306.072L1013.3 309.884L1015.7 313.496L1015.9 318.01L1016.8 321.02L1020.7 323.026L1024.3 324.431V324.431Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1094.6 394.253L1094.1 394.955L1093.6 396.359L1094 398.667L1092.5 400.874L1091.7 403.482L1091.2 406.291L1091.4 407.996L1091.3 410.906L1090.4 411.507L1089.7 414.316L1089.9 416.022L1088.7 417.627L1088.8 419.332L1089.6 420.436L1088.2 421.84L1086.5 421.339L1085.7 420.035L1083.9 419.533L1082.6 420.335L1079 418.63L1078.1 419.433L1076.3 417.426L1073.8 414.818L1072.7 412.711L1070.5 410.605L1068 407.695L1068.7 406.692L1069.5 407.695L1070 407.294L1071.8 406.993L1072.6 405.488H1073.4L1073.6 402.278L1074.9 402.178H1076.1L1077.5 400.472L1079 401.777L1079.6 400.974L1080.8 400.171L1082.9 398.466L1083.1 397.062L1083.6 397.162L1084.5 395.657L1085.1 395.457L1086 396.46L1087.1 396.66L1088.4 395.858H1089.8L1091.8 395.055L1092.7 394.152L1094.6 394.253V394.253Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1124.3 435.081L1123.6 435.984L1124.7 439.796L1123.6 441.702L1121.8 441.201L1120.9 444.311L1119.1 442.505L1118.1 438.994L1119.5 437.288L1118.1 436.887L1117.2 434.78L1114.4 432.975L1112 433.376L1110.7 435.583L1108.3 437.188L1107.1 437.389L1106.5 438.793L1109 442.304L1107.4 443.107L1106.6 444.01L1103.9 444.411L1103.1 440.499L1102.3 441.602L1100.5 441.201L1099.5 438.693L1097.2 438.191L1095.7 437.489H1093.3L1093.1 438.893L1092.5 437.89L1092.8 436.586L1093.4 435.282L1093.2 434.178L1094.1 433.376L1093 432.473L1093.1 429.865L1095.3 429.263L1097.2 431.57L1097 432.975L1099.2 433.276L1099.8 432.674L1101.3 434.279L1104.1 433.777L1106.6 432.172L1110.1 430.868L1112.1 428.962L1115.2 429.363L1115 429.965L1118.1 430.166L1120.5 431.37L1122.3 433.276L1124.3 435.081V435.081Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1165.5 518.546L1160.4 518.245L1159.6 519.249L1155 520.452L1148.7 524.866L1148.4 527.876L1147 530.083L1147.7 533.594L1144.3 535.4L1144.5 538.209L1143 539.312L1145.6 545.131L1148.9 549.043L1147.9 551.852L1151.7 552.153L1154 555.664L1159 555.765L1163.4 552.053L1163.5 561.784L1166.1 562.486L1169.3 561.382L1174.8 571.815L1173.7 573.922V578.537L1174 583.954L1172.1 587.164L1173.3 589.572L1172.2 591.779L1175.1 597.196L1172.2 604.118L1171.1 607.429L1168.3 609.034L1162.4 605.322L1161.6 602.714L1149.9 596.293L1139.2 589.171L1134.5 585.258L1131.7 579.941L1132.5 578.035L1127.1 569.608L1120.7 557.771L1114.7 544.93L1112.3 541.921L1110.3 537.206L1105.7 532.992L1101.6 530.384L1103.3 527.575L1100.3 521.355L1102 516.841L1106.4 512.828L1107.1 515.537L1105.5 517.042L1105.8 519.349L1108.1 518.847L1110.4 519.55L1112.9 522.86L1116 520.151L1116.9 515.838L1120.3 510.22L1127 507.712L1133.1 500.89L1134.8 496.777L1134 491.862L1135.5 491.26L1139.3 494.269L1141.1 497.379L1143.7 498.984L1147.2 505.706L1151.4 506.608L1154.5 504.903L1156.6 506.007L1160 505.405L1164.4 508.414L1160.9 515.035L1162.6 515.136L1165.5 518.546V518.546Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1067.5 404.685L1066.8 406.19L1063.5 406.09L1061.5 405.488L1059.3 404.184L1056.3 403.782L1054.8 402.378L1055.1 401.475L1057.1 399.87L1058.3 399.168L1058 398.365L1059.4 397.964L1061 398.566L1062.1 399.77L1063.7 400.873L1063.8 401.676L1066.3 400.973L1067.5 401.375L1068.2 402.077L1067.5 404.685V404.685Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1195.3 464.174L1200 464.976V422.341L1198.5 422.341L1198.4 423.946L1195.1 425.952L1190.9 425.15L1187.8 422.341L1181.7 422.943H1176.7L1176.5 420.736L1173.1 417.225L1169.1 417.124L1167.4 412.51L1165.3 414.616L1165.9 417.626L1158.7 420.234V425.15L1160.4 427.357L1158.9 432.072L1156.4 432.473L1154.5 427.357L1157.2 423.645L1157.5 420.234L1155.8 417.325L1159.2 416.523L1159.4 415.018L1155.7 416.121L1154.1 419.331L1151.8 421.137L1150 423.545L1149.1 428.159L1147.3 431.972L1150.2 432.373L1150.8 435.282L1152 436.787L1152.3 439.295L1151.6 441.702L1151.7 443.107L1153.1 443.609L1154.3 445.815L1161.6 445.214L1164.9 446.016L1168.7 451.634L1171 450.932L1175.1 451.233L1178.3 450.53L1180.3 451.634L1179.1 455.045L1177.8 457.252L1177.2 461.866L1178.3 466.18L1179.8 468.086L1180 469.491L1177.1 472.701L1179.1 474.105L1180.6 476.413L1182.2 482.833L1185.3 486.244L1189.7 485.843L1190.8 483.836L1195 482.331L1197.4 481.228L1198.1 478.519L1200 477.516V475.008L1197.1 474.808L1196.4 470.694L1196.7 466.381L1194.2 464.776L1195.3 464.174Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1108.4 184.587L1114.5 182.581L1109.1 180.875L1104.7 181.678L1100.8 179.772L1096.2 178.768L1092.9 178.367L1091.9 177.364L1092.8 173.953H1091.1L1089.8 176.361H1079.6H1062.6H1045.8H1030.9H1016.1H1001.4H986.3H981.5H966.8H952.7L951.1 181.477L948.6 186.593L946.4 188.299L947.4 182.38L941.6 180.173L940.2 181.477L939.8 184.386L938 189.703L933.7 198.23L929.7 203.948L925.7 209.667L920.2 215.686L919.1 220.601L916.3 226.018L912.4 231.335L913.3 234.846L911.5 240.063L913 245.48L914.3 247.587L913.4 249.092L913.9 258.02L916.4 264.44L915.6 267.952L916.5 269.055L921.3 269.657L922.5 271.362L925.4 271.764L925.3 273.569L927.5 274.372L929.6 278.084L929.3 281.294L935.6 280.792L942.7 280.09L941.8 281.394L948.8 284.504L959.7 289.018H970.5H974.8L975.6 286.31H985L986.3 288.617L988.4 290.724L990.8 293.533L991.6 296.843L992 300.455L994.3 302.361L998.3 304.267L1003.1 299.251L1007.6 299.05L1010.8 301.659L1012.4 306.073L1013.3 309.885L1015.7 313.496L1015.9 318.01L1016.8 321.02L1020.7 323.026L1024.3 324.431L1026.5 324.23L1025.9 322.023L1026.3 319.014L1027.3 314.499L1029.2 311.59L1032.9 308.581L1039 305.772L1045.1 301.057L1050.1 299.552L1053.6 299.05L1057.2 300.555L1062.1 299.752L1065.4 303.163L1069.3 303.364L1071.6 302.16L1073.4 303.063L1074.6 302.26L1073.8 300.956L1074.5 298.348L1073.9 296.643L1076.4 295.639L1080.7 295.138L1085.3 295.94L1091.7 295.038L1094.7 296.643L1096.7 299.652L1097.6 300.053L1103.7 297.044L1105.6 298.047L1108.7 303.464L1109.5 306.975L1107.5 311.289L1107.9 313.797L1109.5 318.713L1111.5 324.23L1113.3 325.735L1113.7 328.544L1116.3 329.346L1118.1 328.544L1120.1 324.631L1120.7 322.124L1121.7 317.71L1120.4 310.286L1120.9 307.477L1119.4 302.963L1118.8 297.445V292.931L1120.7 288.417L1124.2 284.604L1128 281.495L1134.9 277.281L1136.2 275.174L1139.6 272.767L1142.4 272.366L1146.8 268.553L1152.9 266.647L1157.5 261.932L1158.5 255.512V253.305L1157.1 252.803L1158.6 246.684L1155.6 244.678L1158.8 245.681V241.568L1160.7 238.759L1159.7 244.176L1161.7 246.584L1158.8 250.998L1159.2 251.198L1163.7 246.082L1166.1 243.574L1166.7 241.166L1165.7 240.063V236.552L1166.9 238.157L1168 238.458L1167.9 240.163L1173.2 235.248L1175.7 230.633L1174.3 230.332L1176.4 228.526L1176 229.329H1179.3L1187.2 227.423L1186.1 226.219L1178 227.423L1183 225.517L1186.1 225.216L1188.4 224.915L1192.6 223.811L1195.1 223.912L1198.9 222.909L1199.9 221.103L1198.8 219.698L1198.6 222.006L1196.5 221.805L1195.8 218.495L1197 215.084L1198.3 213.679L1200 212.174L1199.9 199.634L1199.1 199.936L1198 201.44H1188.7L1180.9 201.541L1178.2 202.644L1171.4 207.058L1171.6 207.961L1171 210.469L1166.4 212.576L1162.4 212.074L1158.5 211.773L1155.8 212.576L1155.5 214.482L1155.4 215.084L1149.6 218.896L1145 220.702L1142 221.604L1138.3 223.31L1134.3 224.213L1131.8 223.811L1129.1 222.507L1131.8 220.1L1133.8 217.893L1137.5 214.381L1138.2 211.773L1138.7 208.061L1137.1 207.46L1132.8 210.168H1131.8L1132.2 208.563L1136 206.055L1137.6 203.146L1138.4 200.237L1135.6 197.829L1131.8 196.525L1130.1 198.932L1128.8 199.534L1126.6 202.644L1127 200.538L1124.3 202.042L1122.2 204.249L1119.6 207.359L1118.2 210.068L1118.3 213.98L1116.5 218.194L1113.2 221.303L1111.8 222.106L1110.2 222.808L1108.4 222.909L1108.1 222.407L1108 219.096L1108.6 217.391L1109.4 215.886L1110 212.776L1112.5 209.165L1115.4 204.751L1120.1 199.835H1119.4L1113.9 203.948L1113.5 203.246L1116.5 200.939L1121.2 196.826L1124.9 196.224L1129.4 195.02L1133.1 195.722H1133.2L1137.9 195.12L1136.4 192.612L1135.2 192.412L1133.7 192.211L1133.4 190.405L1128.3 190.907L1123.2 192.311L1120.7 189.904L1118.2 189.101L1121.3 185.791L1115.9 187.897L1111 190.004L1106.4 191.509L1104.3 189.402L1098.6 190.706L1099.1 189.803L1103.7 187.095L1108.4 184.587Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M850 126.502L843 128.809L842.2 127.204L844.5 124.395L850.9 122.289L854.4 121.386L857 121.787V123.693L850 126.502Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M811 109.849L807.1 110.752L805.4 109.648L804.6 108.043L810.3 107.04L813.3 107.642L811 109.849Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M812.2 87.377L813.4 88.3801L816.9 87.8785L818.5 89.3833L821.8 90.0856L820.6 90.7878L815.7 91.9916L814 90.6875L813.7 89.6843L809.4 89.9852L809.1 89.4836L812.2 87.377Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M985 54.2726L960.4 74.7376L924.8 107.542L929 107.742L931.8 109.347L932.3 111.956L932.6 115.768L940.2 112.457L946.7 110.551L946.1 113.661L946.9 116.069L948.5 118.777L947.4 122.991L946 129.913L950.6 133.725L947.4 137.537L942.3 140.446L941.7 138.239L939.2 136.233L942.5 131.016L940.9 126.101L943.6 120.483L939.5 120.082L932.4 119.981L928.6 118.176L925.3 112.056L922 110.953L916.3 108.846L909.5 109.347L903.5 106.639L900.8 104.131L894.5 105.335L891 109.448L888.1 109.849L881.5 111.053L875.3 113.059L868.9 114.363L872.1 110.852L880.5 105.034L887.3 103.228L887.7 101.824L878.3 105.034L870.9 108.946L859.7 113.16L859.9 116.069L850.9 120.282L843.2 122.79L836.6 124.696L832.6 127.304L822 130.414L817.5 133.223L809.3 135.832L806.6 135.43L800.4 137.035L793.4 139.142L787.3 141.148L777.3 142.954L777.7 141.851L785.9 139.042L792.5 137.136L801.1 133.825L807.6 133.223L812.6 130.715L823 127.104L825.3 125.9L831 123.793L836.8 119.279L843 115.768L835.7 117.574L835.4 116.47L830.5 118.677L830.9 115.668L827.3 117.774L828.9 114.865L821.6 117.172H818.8L822.5 113.661L825.8 111.454L825.4 109.347L818.2 110.551L817.6 107.742L816.3 106.338L820.3 103.027L819.9 100.519L825.8 97.2089L833.5 93.8984L838.8 90.9892L842.9 90.5879L844.7 91.4908L851.8 88.6819L854.3 89.1835L859.9 87.3777L862.4 84.7694L861.3 83.7663L867.3 81.5593L864.5 81.6596L858.3 82.8634L855.4 84.1675L853.6 82.8634L846.7 83.5656L842.1 82.1612L843.3 79.8538L842.3 76.6437L851.5 74.236L864.7 71.5274H868.2L863.9 74.3363L873.1 74.1357L874.3 70.6245L872 68.5179L872.8 65.7089L872.1 63.4016L868.8 61.6962L875.3 58.787L882.8 58.5863L891.6 56.1787L896.4 53.5704L904.3 50.9621L909.1 50.3602L920.3 47.9526L923.4 48.3538L933.8 45.5449L938.2 46.6484L937.7 49.0561L941 48.0529L947.3 48.3538L945.4 49.5577L950.3 50.4605L955.2 49.9589L961.4 51.564L968.6 52.1659L970.8 52.7678L977.4 51.9653L981.5 53.5704L985 54.2726Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1187.2 371.68L1187.8 371.781H1188.4L1188.7 371.881L1189.3 371.781L1189.6 371.881L1190 371.781L1190.2 371.881L1190.7 371.781L1191.1 371.881H1191.4L1192.2 372.082V371.881L1192.8 372.082L1192.9 371.981L1193.7 372.082L1193.9 372.282H1194.1L1194.7 372.583L1194.9 372.483L1194.8 373.185L1195 373.486L1194.1 373.787L1193.8 374.188L1193.5 374.79L1193.2 374.991L1192.9 375.091H1192.5L1191.9 375.192L1191.6 375.392L1190.9 375.292L1190.7 375.091L1190.2 375.292L1189.9 374.991L1189.2 375.192L1188.3 375.091L1188 375.192L1187.4 375.292L1187.2 375.392L1187 375.192L1186.6 375.091L1186.3 375.292L1185.7 375.192L1186 374.489V374.088L1186.2 373.687L1186 373.085L1185.8 372.985L1185.7 372.583L1186.1 372.383L1186.3 372.282V371.781L1186.7 371.58L1187.2 371.68Z" fill="white" fill-opacity="0.24" stroke="black" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <g id="check">
        <ellipse cx="89.3351" cy="118.465" rx="16.3351" ry="16.3663" fill="#D82086"/>
        <path d="M81.4497 119.594L85.9559 124.108L97.2215 112.821" stroke="white" stroke-width="1.94702" stroke-linecap="square"/>
      </g>

      
      
      <text x="120" y="128" fill="#FFFFFF" font-family="Manrope" font-size="25" font-weight="500" letter-spacing="-0.1">
      Challenge completed
      </text>
      
      <rect x="66" y="509.638" width="271.552" height="27.9375" fill="#FA3EA6"/>
      <text x="76" y="518" fill="#FFFFFF" font-family="Manrope" font-size="34" font-weight="700" letter-spacing="-1.2">
        are you joining?
      </text>




      ${createMultilineText({
        fontSize: 97,
        fontWeight: 800,
        letterSpacing: -1.66,
        maxWidth: 790,
        text: message,
        x: 74,
        y: 246,
      })}

      ${
        names?.length
          ? `
      <rect x="729" y="90" width="240" height="28" fill="#FA3EA6"/>
      <text x="740" y="102" fill="#FFFFFF" font-family="Manrope" font-size="42" font-weight="700">
        I nominate
      </text>

      ${names?.map(
        (name, i) => `
          <svg x="769" y="${
            144 + i * 144
          }" width="431" height="116" viewBox="0 0 431 116" fill="none">
            <path d="M432 0H17.5L0 116H432V0Z" fill="white" fill-opacity="0.90"/>
            <text x="47" y="50%" dy="0.37em" fill="#12244A" font-family="Manrope" font-size="66" font-weight="700" letter-spacing="-2.1">
              ${name}
            </text>
          </svg>`
      )}`
          : ''
      }
    </svg>
  `
}

function createMultilineText({
  fontSize = 24,
  fontWeight = '400',
  letterSpacing = 0,
  maxWidth,
  text,
  x,
  y,
}) {
  const words = text.split(' ')
  const charactersPerLine = Math.round(maxWidth / (fontSize * 0.6))

  const lines = words.reduce((acc, word) => {
    if (!acc.length) {
      acc.push(word)
    } else {
      const currentLine = acc[acc.length - 1]
      if (currentLine.length + word.length < charactersPerLine) {
        acc[acc.length - 1] = `${currentLine} ${word}`
      } else {
        acc.push(word)
      }
    }

    return acc
  }, [])

  return `
    <text x="${x}" y="${y}" fill="#FFFFFF" font-family="Manrope" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="${letterSpacing}">
      ${lines
        .map((line, i) => {
          return `<tspan x="${x}" dy="${i === 0 ? 0 : '1em'}">${line}</tspan>`
        })
        .join('')}
    </text>
  `
}
