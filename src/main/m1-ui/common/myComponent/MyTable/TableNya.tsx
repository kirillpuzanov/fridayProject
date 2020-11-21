import React, {CSSProperties, ReactNode} from 'react';

export type TableNyaModelType = {
    title: (index: number, loading: boolean) => ReactNode ;
    render: (dataItem: any, modelIndex: number, dataIndex: number, loading: boolean) => ReactNode;
}

export type TableNyaPropsType = {
    loading?: boolean; title?: string; model?: TableNyaModelType[]; data: any;
    headerStyle?: CSSProperties, tableStyle?: CSSProperties, rowsStyle?: CSSProperties, rowStyle?: CSSProperties,
}

const MyTable: React.FC<any> = (
    {
        loading = false, title = 'table', model, data,

        headerStyle, tableStyle,
        rowsStyle, rowStyle,
    }
) => {

    return (
        <div style={{margin: '0 10px', ...tableStyle}}>
            {title}

            <div style={{border: '1px solid red', width: '100%', display: 'flex', ...headerStyle}}>


                { model.map((m:any, index:any) => m.title(index, loading))}


            </div>

            <div style={{border: '1px solid lime', width: '100%', ...rowsStyle}}>


                {data.map((dataItem: any, dataIndex: number) => (
                    <div key={title + '-row-' + (dataItem._id || dataIndex)}
                         style={{width: '100%', display: 'flex', ...rowStyle}}>


                        {model.map((m:any, modelIndex:any) =>
                            m.render(dataItem, modelIndex, dataIndex, loading))}





                    </div>
                ))}
            </div>
        </div>
    );
};

export default  MyTable;
