<map version="freeplane 1.9.8">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Chat" FOLDED="false" ID="ID_696401721" CREATED="1610381621824" MODIFIED="1633880496353" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false" associatedTemplateLocation="template:/standard-1.6.mm" show_icon_for_attributes="true" show_note_icons="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ID="ID_271890427" ICON_SIZE="12 pt" COLOR="#000000" STYLE="fork">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" DASH="" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_271890427" STARTARROW="DEFAULT" ENDARROW="NONE"/>
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
<richcontent CONTENT-TYPE="plain/auto" TYPE="DETAILS"/>
<richcontent TYPE="NOTE" CONTENT-TYPE="plain/auto"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.selection" BACKGROUND_COLOR="#4e85f8" BORDER_COLOR_LIKE_EDGE="false" BORDER_COLOR="#4e85f8"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important" ID="ID_67550811">
<icon BUILTIN="yes"/>
<arrowlink COLOR="#003399" TRANSPARENCY="255" DESTINATION="ID_67550811"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10 pt" SHAPE_VERTICAL_MARGIN="10 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="7" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Feature: Socket Connect" POSITION="right" ID="ID_1723223143" CREATED="1633856108424" MODIFIED="1633856328866" HGAP_QUANTITY="134.75 pt" VSHIFT_QUANTITY="-128.25 pt">
<edge COLOR="#0000ff"/>
<node TEXT="Event: Socket Connect" ID="ID_1100224874" CREATED="1633856334489" MODIFIED="1633856339820"/>
<node TEXT="Event: Socket: Disconnect" ID="ID_259434147" CREATED="1633856343969" MODIFIED="1633856350635"/>
<node TEXT="Offline behaviour: Buffering messages" ID="ID_1564573252" CREATED="1633856673988" MODIFIED="1633856714274"/>
</node>
<node TEXT="Feature: Rooms" POSITION="left" ID="ID_1708824348" CREATED="1633856158913" MODIFIED="1633856392071" HGAP_QUANTITY="252.49999 pt" VSHIFT_QUANTITY="-135.75 pt">
<edge COLOR="#00ff00"/>
<node TEXT="Event: Join" ID="ID_1787029848" CREATED="1633856212292" MODIFIED="1633856252644"/>
<node TEXT="Event: Leave" ID="ID_680650455" CREATED="1633856238118" MODIFIED="1633856243823"/>
<node TEXT="Event: Create" ID="ID_1123370740" CREATED="1633856257494" MODIFIED="1633856261426"/>
<node TEXT="Event: Delete" ID="ID_683579422" CREATED="1633856266683" MODIFIED="1633856270422"/>
<node TEXT="Receive Messages while still connected, but other Room Tab" ID="ID_215343886" CREATED="1633856368338" MODIFIED="1633856392070" HGAP_QUANTITY="-138.25 pt" VSHIFT_QUANTITY="69.75 pt"/>
</node>
<node TEXT="Feature: Storage Message History" POSITION="left" ID="ID_238413462" CREATED="1633856197034" MODIFIED="1633856295347" HGAP_QUANTITY="270.49999 pt" VSHIFT_QUANTITY="93.75 pt">
<edge COLOR="#ff00ff"/>
</node>
<node TEXT="Feature: Conditional Behaviour on type of Message" POSITION="right" ID="ID_884339332" CREATED="1633856495420" MODIFIED="1633856546486">
<edge COLOR="#00ffff"/>
<node TEXT="NEW_USER_JOINS_ROOM" ID="ID_1581654958" CREATED="1633856551393" MODIFIED="1633856576337"/>
<node TEXT="USER_LEAVES_ROOM" ID="ID_725538194" CREATED="1633856581685" MODIFIED="1633856596148"/>
<node TEXT="IS_TYPING" ID="ID_792927412" CREATED="1633856598394" MODIFIED="1633856633962"/>
<node TEXT="NEW_MESSAGE" ID="ID_1267413631" CREATED="1633856654656" MODIFIED="1633856661821"/>
</node>
<node TEXT="Feature: Authentication" POSITION="right" ID="ID_1759179416" CREATED="1633872811437" MODIFIED="1633880499793" HGAP_QUANTITY="-25.75 pt" VSHIFT_QUANTITY="161.25 pt">
<edge COLOR="#7c0000"/>
<node TEXT="When? On every connection or even every event?" ID="ID_1415285825" CREATED="1633872827396" MODIFIED="1633872853086" HGAP_QUANTITY="17 pt" VSHIFT_QUANTITY="40.5 pt"/>
<node TEXT="Beispiel:&#xa;- mit JWT" ID="ID_1781289819" CREATED="1633880467763" MODIFIED="1633880542862" LINK="https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65" HGAP_QUANTITY="17.75 pt" VSHIFT_QUANTITY="11.25 pt"/>
</node>
<node TEXT="1.) Verwaltung: Context, Ref oder rein state/useEffect&#xa;2.) Allg. erwartete Verhalten: Öffnen der Chat-Seite oder HomeSeite, bei jedem Springen connect/disconnect?" POSITION="left" ID="ID_1558956748" CREATED="1633880253941" MODIFIED="1633881334504" HGAP_QUANTITY="234.49999 pt" VSHIFT_QUANTITY="167.25 pt">
<edge COLOR="#00007c"/>
<cloud COLOR="#ffff99" SHAPE="RECT"/>
<node TEXT="Beispiel mit useRef" ID="ID_1487439133" CREATED="1633881327921" MODIFIED="1633881359283" LINK="https://stackoverflow.com/questions/58432076/websockets-with-functional-components" HGAP_QUANTITY="-465.24999 pt" VSHIFT_QUANTITY="118.5 pt"/>
</node>
</node>
</map>
